var yo = require('yo-yo');
var landing = require('../landing');
var signupForm =  yo`<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="platzigram">Platzigram</h1>
			<form class="signup-form">
				<h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
				<div class="section">
					<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
					<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="Correo Electrónico">
					<input type="text" name="name" placeholder="Nombre completo">
					<input type="text" name="username" placeholder="Nombre de Usuario">
					<input type="password" name="password" placeholder="Contraseña">
					<button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
				</div>
				<div class="row">
					<div class="login-box">
						¿Tienes una cuenta? <a href="/signin">Entrar</a>
					</div>
				</div>
			</form>
		</div>	
	</div>
</div>`;

module.exports = landing(signupForm);