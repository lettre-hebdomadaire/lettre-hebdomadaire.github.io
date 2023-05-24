<!DOCTYPE html>
<html>
	<head>
		<title>La Lettre Hebdomadaire</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="La LH est un sorte de cryptide, une association qui, malgré les ides de mars qu'elle subit chaque année, finit toujours par ressortir de l'oubli pour un ou deux mois." />
		<link href="style.css" rel="stylesheet" type="text/css">
	</head>

	<body>
		<div class="topnav">
			<div class="topnav-left">
				<a class="img-link" href="">
					<img class="img-link" style="max-height:100%; width:auto;" src="assets/Logo_LH2.png" alt="Lettre Hebdomadaire" border="0">
				</a>
			</div>
			<div class="topnav-right">
				<div id="lang">
					<a href="" class="langlink">
						<img src="assets/fr.png" alt="Français" class="langlink" border="0">
					</a>
					<a href="index-en.html" class="langlink">
						<img src="assets/en.png" alt="English" class="langlink" border="0">
					</a>	
				</div>
			</div>
		</div>

		<?php
				// Récupère l'adresse IP du visiteur et l'enregistre dans un fichier texte
				$ip = $_SERVER['REMOTE_ADDR'];
				$browser = $_SERVER['HTTP_USER_AGENT'];
				$referer = $_SERVER['HTTP_REFERER'];
				$timestamp = date('d/m/Y H:i:s');
				$fp = fopen("common/visiteurs.txt", "a");
				fputs($fp, $ip . " - " . $timestamp . " - " . $browser . " - " . $referer . "\n");
				fclose($fp);
			?>

		<div id="ppal">	
			<div id="banner" align="center">
				<b>La Lettre Hebdomadaire</b>
			</div>
			<div class="maligne"></div>

			<div id="logo" align="center"> 
				<img src="assets/Logo_LH2.png" WIDTH=250 alt="Lettre Hebdomadaire" border="0"></a>
			</div>
			
			<div id="menu">
				<b><a href="LH1" class="menulink">Parution du 1er avril</a></b><br>
				<b><a href="LH2" class="menulink">Parution du 8 avril</a></b><br>
				<b><a href="LH3" class="menulink">Parution du 15 avril</a></b><br>
				<b><a href="LH4" class="menulink">Parution du 22 avril</a></b><br>
				<b><a href="LH5" class="menulink">Parution du 29 avril</a></b><br>
				<b><a href="LH6" class="menulink">Parution du 6 mai</a></b><br>
				<b><a href="LH7" class="menulink">Parution du 15 mai</a></b><br>
				<b><a href="LH8" class="menulink">Parution du 22 mai</a></b><br>
			</div>
			
			<div id="content">
				<p align="justify"> La Lettre Hebdomadaire, qu'est-ce que c'est ? Une sorte de cryptide, une association qui, malgré les ides de mars qu'elle subit chaque année, finit toujours par ressortir de l'oubli pour un ou deux mois.</p>
				<p > Vous ne pourrez jamais savoir si l'édition que vous lisez est la dernière. Alors, profitez-en.</p>
			
				<p>Bien sûr, la lettre est ouverte à tous les télécommiens. Alors si vous avez des articles, des memes, des fictions, des jeux en javascript... Bref, si vous avez un truc qui vous passe par la tête, on le publiera pour vous ! Pas de pression, ça a pas besoin d'être parfait ! (et on peut le traduire en anglais ou français pour vous)
					<br>Envoyez ça par <a href="https://www.facebook.com/profile.php?id=100091511889368">mp facebook</a> ou par mail à <a href="mailto:lettre.hebdomadaire.telecom@gmail.com">lettre.hebdomadaire.telecom@gmail.com</a>
				</p>

				<?php 
					// Récupère le nombre de visiteurs et l'affiche
					$fp = fopen("common/visiteurs.txt", "r");
					$counter = 0;
					while(!feof($fp)) {
						$line = fgets($fp);
						$counter++;
					}
					fclose($fp);
					echo "<p>Nombre de visiteurs : " . $counter . "</p>";
				?>
			</div>
			
		</div>
	</body>
</html>
