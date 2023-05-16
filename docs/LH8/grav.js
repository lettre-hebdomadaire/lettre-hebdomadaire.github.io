// Physics engine in JavaScript

const scale = 100; // 1 meter = 100 pixels

var Mouse = {
    pos: {x: 0, y: 0},
    down: false,
};

var canvas = null;
var ctx = null;
var lastTime = 0;


function init() {
    canvas = document.getElementById("can");
    ctx = canvas.getContext("2d");

    for(var i = 0; i<10; i++) { 
        Scene.add(new Rectangle((Math.random()*(canvas.width-200) + 100)/scale, (Math.random()*(canvas.height-200) + 100)/scale, 0.5, 0.5, "red"));
    }

    lastTime = Date.now();

    setInterval(function() {
        var currentTime = Date.now();
        var dt = (currentTime - lastTime)/1000;
        lastTime = currentTime;

        Scene.update(dt);
        Scene.draw();
    }, 1000/60);

}

window.onload = init;
window.onmousemove = function(e) {
    Mouse.pos.x = e.clientX;
    Mouse.pos.y = e.clientY;
}
window.onmousedown = function(e) {
    Mouse.down = true;
}
window.onmouseup = function(e) {
    Mouse.down = false;
}

class Rectangle {
    constructor(x, y, w, h, color) {
        this.pos = {x : x, y : y};
        this.vel = {x : 0, y : 0};
        this.size = {w : w, h : h};
        this.rot = Math.random()*Math.PI*2;

        this.color = color;
    }
}

var Scene = {
    objects: [],
    add: function(obj) {
        this.objects.push(obj);
    },
    update: function(dt) {
        this.objects.forEach(obj => {
            obj.pos.x += obj.vel.x*dt;
            obj.pos.y += obj.vel.y*dt;

            obj.vel.y += 9.81*dt;
            if(obj.pos.x < 0) {
                obj.pos.x = 0;
                obj.vel.x *= -1;
            }
            if(obj.pos.x > canvas.width/scale) {
                obj.pos.x = canvas.width/scale;
                obj.vel.x *= -1;
            }
            if(obj.pos.y < 0) {
                obj.pos.y = 0;
                obj.vel.y *= -1;
            }
            if(obj.pos.y > canvas.height/scale) {
                obj.pos.y = canvas.height/scale;
                obj.vel.y *= -1;
            }
        });
    },
    draw: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw buffer : objects array plus a temporary object for the mouse
        var drawBuffer = [];
        this.objects.forEach(obj => {
            drawBuffer.push(obj);
        });
        drawBuffer.push(new Rectangle(Mouse.pos.x/scale, Mouse.pos.y/scale, 0.5, 0.5, "blue"));

        drawBuffer.forEach(obj => {
            ctx.save();
            ctx.translate(obj.pos.x * scale, obj.pos.y * scale);
            ctx.rotate(obj.rot);
            ctx.fillStyle = obj.color;
            ctx.fillRect(-obj.size.w/2 * scale, -obj.size.h/2 * scale, obj.size.w * scale, obj.size.h * scale);
            ctx.restore();

            // Draw object's vertices
            var vertices = Physics.constructVertices(obj);
            ctx.fillStyle = "black";
            vertices.forEach(vertex => {
                ctx.beginPath();
                ctx.arc(vertex.x*scale, vertex.y*scale, 5, 0, Math.PI*2);
                ctx.fill();
            });

            // Draw object's normals
            var normals = Physics.constructNormals(vertices);
            normals.forEach(normal => {
                ctx.beginPath();
                ctx.moveTo(obj.pos.x*scale, obj.pos.y*scale);
                ctx.lineTo((obj.pos.x + normal.x)*scale, (obj.pos.y + normal.y)*scale);
                ctx.stroke();
            });

        });
    }
}

var Physics = {
    gravity: 9.81,
    // Returns minAlong and maxAlong
    SATTest : function(axis, ptSet) {
        minAlong = Number.MAX_VALUE;
        maxAlong = Number.MIN_VALUE;
        ptSet.forEach(pt => {
            var along = pt.x*axis.x + pt.y*axis.y;
            if(along < minAlong) minAlong = along;
            if(along > maxAlong) maxAlong = along;
        });
        return {minAlong: minAlong, maxAlong: maxAlong};

    },
    constructVertices: function(obj) {
        var obj1Vertices = [
            {x: obj.pos.x - obj.size.w/2, y: obj.pos.y - obj.size.h/2},
            {x: obj.pos.x + obj.size.w/2, y: obj.pos.y - obj.size.h/2},
            {x: obj.pos.x + obj.size.w/2, y: obj.pos.y + obj.size.h/2},
            {x: obj.pos.x - obj.size.w/2, y: obj.pos.y + obj.size.h/2},
        ];

        // Rotate the vertices of the object by its rotation
        obj1Vertices.forEach(vertex => {
            var x = vertex.x - obj.pos.x;
            var y = vertex.y - obj.pos.y;
            vertex.x = x*Math.cos(obj.rot) - y*Math.sin(obj.rot) + obj.pos.x;
            vertex.y = x*Math.sin(obj.rot) + y*Math.cos(obj.rot) + obj.pos.y;
        });

        return obj1Vertices;
    },
    constructNormals: function(vertices) {
        var normals = [];
        for(var i = 0; i<vertices.length; i++) {
            var j = (i+1)%vertices.length;
            var edge = {x: vertices[j].x - vertices[i].x, y: vertices[j].y - vertices[i].y};
            normals.push({x: edge.y, y: -edge.x});
        }
        return normals;
    },
    obbCollision: function(obj1, obj2) {
        // Construct vertices of the OBBs
        var obj1Vertices = this.constructVertices(obj1);
        var obj2Vertices = this.constructVertices(obj2);

        // apply the separating axis theorem
        
        var obj1Normals = this.constructNormals(obj1Vertices);
        var obj2Normals = this.constructNormals(obj2Vertices);
        
        

    }
}