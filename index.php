<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta charset="UTF-8">
	<title>Almas Oscuras</title>
	<link rel="stylesheet" type="text/css" media="screen" href="css/styles.css" />

	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<![endif]-->
	<script>
	// Picture element HTML5 shiv
	document.createElement( "picture" );
	</script>
</head>
<body>
<div class="page" style="position:relative">
	<header id="header">
		<div class="l-header--wrapper">
			<div class="logo">Almas Oscuras</div>
			<div class="logo-responsive"><img src="img/logo2.png" alt="Almas Oscuras"></div>
			<div id="nav-main">
				<div class="nav-main--contents">
					<nav>
						<a href="#" class="nav-main--bt" data-desplegar="menu"><i class="al-icon-menu"></i></a>
					</nav>
				</div>
				<div class="nav-main--search">
					<nav>
						<a href="#" class="nav-main--bt" data-desplegar="search"><i class="al-icon-search"></i></a>
					</nav>
				</div>
			</div>
		</div>	
	</header>
	<div class="menuDesplegable--wrapper">
		<div class="menuDesplegable">
			<div class="menuDesplegable--content">
				<!-- <i class="xClose"> </i> -->
				<div class="gr-container">
					<div class="gr-row">
						<div class="gr-block4">
    						<header class="menuDesplegable--content-header">
    							<img src="http://placehold.it/350x150" style="width: 100%">
    						</header>
    						<h2>Películas en VOD</h2>
    						<p>Descubre nuestro catálogo VOD de películas de terror independientes. Puedes ver las películas a través de la plataforma de video online Filmin.es, al precio de 1,95€.</p>
						</div>
						<div class="gr-block4">
							<header class="menuDesplegable--content-header">
    							<img src="http://placehold.it/350x150" style="width: 100%">
    						</header>
    						<h2>Reseñas de películas</h2>
    						<p><strong>Descubre todas las reseñas de Almas Oscuras.</strong> y ordénalas por <strong>título, autor, año de producción, género y puntuación.</strong></p>
    						<header class="menuDesplegable--content-header">
    							<img src="http://placehold.it/350x150" style="width: 100%">
    						</header>
    						<h2>Carteles de películas</h2>
    						<p>O si lo prefieres consulta todas las películas del blog a través de sus pósters.</p>
						</div>
						<div class="gr-block4">
    						<header class="menuDesplegable--content-header">
    							<img src="http://placehold.it/350x150" style="width: 100%">
    						</header>
    						<h2>Relatos</h2>
    						<p>Disfruta de nuestros relatos de terror.</p>
    						<header class="menuDesplegable--content-header">
    							<img src="http://placehold.it/350x150" style="width: 100%">
    						</header>
    						<h2>Libros</h2>
    						<p>Accede a nuestras reseñas de libros.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="searchDesplegable--content">
				<div class="clearfix">
					<form method="get" action="http://www.almasoscuras.com">
						<input type="hidden" value="search" name="s"/>
						<div class="nav-main--search-input">
						<input type="text" value="" name="q" id="buscador--main" placeholder="¿Qué estás buscando?"/>
						</div>
						<div class="nav-main--search-submit">
						<input class="btsearch--main" type="submit" id="btsearch--main" value="" />
						<span class="search-icon" id="search-icon"><i class="al-icon-search"></i></span>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<section class="hero">
		<div class="CoverImage">
			<div class="CoverImage--content">
				<div class="infoblock-text">
				    <div class="tag_header_vod">VOD</div>
				    <h1>The Seasoning of the house</h1>
				    <h2>Inocencia corrompida</h2>
				    <div class="infoblock-text-calltoaction">
				    	<a class="button-secondary" href="#">Seguir leyendo</a>
				    </div>
				</div>
			</div>
		</div>
	</section>

	<section class="content grid-wrapper">
		<div class="grid-col-content">
			<section id="vod-gallery" class="sub-grid-wrapper clearfix">
				<div class="sub-grid-col-article">
					<p class="vod-gallery--discover">Descubre nuestro catálogo de <a href="#">películas online</a> en Filmin.</p>
					<ul class="vod-gallery">
						<li>
							<div>
								<a href="#">
									<img src="img/postervod.jpg" alt="" width="110">
									<span><i class="vod-gallery--play"></i></span>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a href="#">
									<img src="img/postervod.jpg" alt="" width="110">
									<span><i class="vod-gallery--play"></i></span>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a href="#">
									<img src="img/postervod.jpg" alt="" width="110">
									<span><i class="vod-gallery--play"></i></span>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a href="#">
									<img src="img/postervod.jpg" alt="" width="110">
									<span><i class="vod-gallery--play"></i></span>
								</a>
							</div>
						</li>
						<li>
							<div>
								<a href="#">
									<img src="img/postervod.jpg" alt="" width="110">
									<span><i class="vod-gallery--play"></i></span>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<article class="sub-grid-wrapper clearfix">
				<div class="sub-grid-col-article">
					<header>
						<h1 class="title-home"><a href="#">Esto sería un review</a></h1>
						<h2 class="subtitle-home">Mi opinión sobre una peli malísima</h2>
					</header>
					<div class="foto-ficha">
						<p>
							<img src="img/poster.jpg" alt="poster" class="poster">
						</p>
						<section class="ficha" id="ficha">
							<p class="ver-ficha-completa">
								<a href="#" class="button-secondary">Ver ficha completa</a>
							</p>
							<ul class="dades">
								<li class="dades-optatives dades-optatives--off"><span>Título original:</span> Blood River</li>
								<li class="dades-optatives dades-optatives--off"><span>Nacionalidad:</span> Gran Bretaña | <span>Año:</span> 2009</li>
								<li class="dades-optatives dades-optatives--off"><span>Director:</span> Adam Mason</li>
								<li class="dades-optatives dades-optatives--off"><span>Guión:</span> Adam Mason y Simon Boyes</li>
								<li class="dades-optatives dades-optatives--off"><span>Reparto:</span> Andrew Howard, Tess Panzer, Ian Duncan</li>
								<li style="text-align:left dades-optatives--off"><span>Argumento:</span> Un matrimonio viaja en coche recorriendo Estados Unidos. Una rueda revienta en mitad del camino. Su única esperanza es llegar a Blood River, un pueblo abandonado en mitad del desierto.</li>
							</ul>
						</section>

						<section class="valoraciones" id="valoraciones">
							<div class="termometro">
								<table>
									<tbody>
										<tr class="rating">
											<td align="right" class="rate" id="diversion" data-rate="1">DIVERSIÓN: </td>
											<td class="rate-stars">
												
											</td>
										</tr>
										<tr class="rating">
											<td align="right" class="rate" id="horror" data-rate="1">TERROR: </td>
											<td class="rate-stars">
											
											</td>
										</tr>
										<tr class="rating">
											<td align="right" class="rate" id="originalidad" data-rate="3">ORIGINALIDAD: </td>
											<td class="rate-stars">
											
											</td>
										</tr>
										<tr class="rating">
											<td align="right" class="rate" id="gore" data-rate="3">GORE: </td>
											<td class="rate-stars">
											
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div class="total-score">
								<ul>
									<li class="total-score--numbers">4.5/5</li>
									<li class="total-score--stars"><i class="al-icon-star3"></i><i class="al-icon-star3"></i><i class="al-icon-star3"></i><i class="al-icon-star3"></i><i class="al-icon-star2"></i></li>
								</ul>
							</div>
						</section>
					</div><!-- fin foto-ficha -->
					
					<p>
						<img src="img/2.jpg" alt="imagen">
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptates delectus excepturi mollitia obcaecati at vitae repellendus voluptate fugit repudiandae, id, ea aliquid, perferendis animi cumque consectetur autem veniam nam!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptates delectus excepturi mollitia obcaecati at vitae repellendus voluptate fugit repudiandae, id, ea aliquid, perferendis animi cumque consectetur autem veniam nam!
					</p>
					<div class="leer-mas"><a href="#" class="button-primary">Continuar leyendo</a></div>

					<section class="mejor_peor">
						<div>
							<p><span class="loMejor">Lo mejor:</span> Sophie Lowe y los increíbles paisajes.</p>
							<p><span class="loPeor">Lo peor:</span> Hay momentos en los que la falta de diálogo dificulta las cosas (y hay otros momentos en los que funciona).</p>
						</div>
					</section>
				</div>
				<div class="sub-grid-col-aside">
					<footer>
						<ul class="meta-article">
							<li><span class="less">Por</span> Bob Rock<br />
							<time><small class="less">12 | 07 | 2014</small></time></li>
							<li><i class="al-icon-tag"> </i><a href="#"> western</a>, <a href="#">comedia</a></li>
							<li><i class="al-icon-bubble"> </i><a href="#">16 comentarios</a></li>
							<li><a href="#" class="tag--criticas">reseñas</a> <a href="#" class="tag--criticas">thriller</a></li>
						</ul>
					</footer>
				</div>
			</article><!-- fin article -->
			
			<article class="sub-grid-wrapper clearfix">
			<div class="sub-grid-col-article">
					<header>
						<h1 class="title-home"><a href="#">Este sería mi título</a></h1>
						<h2 class="subtitle-home">subtítulo</h2>
					</header>
					<p>
						<img src="img/1.jpg" alt="imagen">
					</p>
					<p>
						Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>. Tempora voluptates delectus excepturi mollitia obcaecati at vitae repellendus voluptate fugit repudiandae, id, ea aliquid, perferendis animi cumque consectetur autem veniam nam!
					</p>
					<p>
						Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>. Tempora voluptates delectus excepturi mollitia obcaecati at vitae repellendus voluptate fugit repudiandae, id, ea aliquid, perferendis animi cumque consectetur autem veniam nam!
					</p>
					<p>
						Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>. Tempora voluptates delectus excepturi mollitia obcaecati at vitae repellendus voluptate fugit repudiandae, id, ea aliquid, perferendis animi cumque consectetur autem veniam nam!
					</p>
					<div class="leer-mas">
						<a href="#" class="button-primary">Continuar leyendo</a>
					</div>
			</div>
			<div class="sub-grid-col-aside">
				<footer>
					<img src="img/monstruo.jpg" class="avatar"/>
					<ul class="meta-article">
						<li><span class="less">Por</span> Bob Rock<br />
						<time><small class="less">12 | 07 | 2014</small></time></li>
						<li><i class="al-icon-tag"> </i><a href="#"> western</a>, <a href="#">comedia</a></li>
						<li><i class="al-icon-bubble"> </i><a href="#">16 comentarios</a></li>
						<li><a href="#" class="tag--noticias">noticias</a></li>
					</ul>
				</footer>
			</div>
			</article><!-- fin article -->
			<!-- INICIO PAGINACIÓN -->
			<div class="navgoogle clearfix">
				<ul class="rsx-page-num-list">
					<li>
						<span class="rsx-nav-right"><a href="http://localhost/almas_real/index.php">Anterior</a></span>
					</li>
					<li>
						<a title="Page 1" href="?pg=1&amp;s=default">1</a>
					</li>
					<li>
						<span class="unlinked">2</span>
					</li>
					<li>
						<a title="Page 3" href="?pg=3&amp;s=default">3</a>
					</li>
					<li>
						<span class="rsx-nav-left"><a href="http://localhost/almas_real/index.php?pg=3">Siguiente</a></span>
					</li>
				</ul>
			</div>
			<!-- FIN PAGINACIÓN -->	
		</div><!-- fin grid col-content -->


		
			<div class="grid-col-aside">
				<aside>
					<section id="share">
						<div class="share-wrapper">
							<ul class="share">
							<li>Síguenos en: </li>
								<li><a href=""><i class="al-icon-facebook"> </i></a></li>
								<li><a href=""><i class="al-icon-twitter"></i></a></li>
								<li><a href=""><i class="al-icon-feed"></i></a></li>
							</ul>
						</div>
					</section>
					<div style="clear:both"></div>
					<section class="aside-block--responsive">
						<div>
							<header class="subsection-header">
								<h3><i class="al-icon-bubble"> </i> Últimos comentarios</h3>
							</header>
							<div id="last-comments--wrapper" class="last-comments--wrapper">
								<ul class="last-comments" id="last-comments">
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier1</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet hidden aj fañ ñfla j jla a fañl añ afdñ jafdñ</span>
									</li>
									<li>
										<a href="">Título película</a><br />
										<span class="last-comments--author">Por Javier2</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película</a><br />
										<span class="last-comments--author">Por Javier3</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película</a><br />
										<span class="last-comments--author">Por Javier4</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										
									</li>
									<li>
										<a href="">Título película</a><br />
										<span class="last-comments--author">Por Javier6</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet añj afñlfdja afñaj fadja fajfa</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
									
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier8</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier9</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier10</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier11</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier12</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier13</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier14</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier15</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
									<li>
										<a href="">Título película hidden</a><br />
										<span class="last-comments--author">Por Javier16</span> <br />
										<span class="last-comments--msg">Lorem ipsum dolor sit amet</span>
									</li>
								</ul>
							</div>
							<div class="last-comments--controllers">
								<span class="last-comments--newer" id="newer"><i class="al-icon-arrow-up"></i> Nuevos</span>
								<span class="last-comments--older" id="older">Antiguos <i class="al-icon-arrow-down"></i></span>
							</div>
						</div>
					</section>
					<div class="aside-row--responsive clearfix">
					<section class="aside-block--responsive" id="last-reviews">
						<div>
							<header class="subsection-header">
								<h3><i class="al-icon-film"> </i> Últimas reseñas</h3>
							</header>
								<div>

								<table class="last-reviews">
									<tr class="last-reviews--starts">
										<td><img src="img/t2.jpg" width="90"></td>
										<td valign="top" class="last-reviews--score" data-rate="3_5"><span></span></td>
										<td valign="top" data-rate="3.5" class="last-reviews--scoreStar">
											<a href="#">Título de la película</a>
											<div class="stars-wrapper">
											
											</div>
											<p>No estoy loca, solo lo parezco</p>
										</td>
									</tr>
									<tr class="last-reviews--starts">
										<td><img src="img/t3.jpg" width="90"></td>
										<td valign="top" class="last-reviews--score" data-rate="2"><span></span></td>
										<td valign="top" data-rate="1" class="last-reviews--scoreStar" class="last-reviews--scoreStar">
											<a href="#">Título de la película</a>
											<div class="stars-wrapper">
											
											</div>
											<p>No estoy loca, solo lo parezco</p>
										</td>
									</tr>
									<tr class="last-reviews--starts">
										<td><img src="img/t4.jpg" width="90"></td>
										<td valign="top" class="last-reviews--score" data-rate="3"><span></span></td>
										<td valign="top" data-rate="3" class="last-reviews--scoreStar">
											<a href="#">Título de la película</a>
											<div class="stars-wrapper">
											
											</div>
											<p>No estoy loca, solo lo parezco</p>
										</td>
									</tr>
									<tr class="last-reviews--starts">
										<td><img src="img/t.jpg" width="90"></td>
										<td valign="top" class="last-reviews--score" data-rate="1"><span></span></td>
										<td valign="top" data-rate="4.5" class="last-reviews--scoreStar">
											<a href="#">Título de la película</a>
											<div class="stars-wrapper">
											
											</div>
											<p>No estoy loca, solo lo parezco</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</section>

				<section class="aside-block--responsive most-comment-row" id="most-comment">
					<div>
						<header class="subsection-header">
							<h3><i class="al-icon-bubbles"> </i> Los + comentado</h3>
						</header>
						<ul class="most-comment">
							<li>
								<div>
								<a href="#">

									<img src="img/lomas.jpg"  class="most-comment--img">
									<span class="most-comment--num">12</span>
								</a>
								</div>
								<span class="most-comment--title"><a href="#">Título de la película</a></span>
							</li>
							<li>
								<div>
								<a href="#">
									<img src="img/lomas.jpg"  class="most-comment--img">
									<span class="most-comment--num"><i class="al-icon-bubble"></i> 12</span>
								</a>
								</div>
								<span class="most-comment--title"><a href="#">Título de la película</a></span>
							</li>
							<li>
								<div>
								<a href="#">
									<img src="img/lomas.jpg"  class="most-comment--img">
									<span class="most-comment--num"><i class="al-icon-bubble"></i> 12</span>
								</a>
								</div>
								<span class="most-comment--title"><a href="#">Título de la película</a></span>
							</li>
							<li>
								<div>
								<a href="#">
									<img src="img/lomas.jpg"  class="most-comment--img">
									<span class="most-comment--num"><i class="al-icon-bubble"></i> 12</span>
								</a>
								</div>
								<span class="most-comment--title"><a href="#">Título de la película</a></span>
							</li>
						</ul>
					</div>
				</section>
				</div><!-- fin aside row responsive -->
			</aside>
		</div><!-- fin aside -->
	</section><!-- fin content -->
</div><!-- fin page -->
<div class="footer-wrapper">
<section id="footer">
	<footer>
		<div class="gr-container">
			<div class="gr-row">
				<div class="gr-block8">
					<img src="img/footer_almas.jpg">
				</div>
				<div class="gr-block4">
					hola der
				</div>
			</div>
		</div>
	</footer>
</section>
</div>
		
</div><!-- fin wrapper -->
<script src="js/main_home.min.js"></script>
</body>
</html>