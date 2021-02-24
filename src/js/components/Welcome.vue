<template>
	<div>
		<div id="body">
			<p>The page you are looking at is being generated dynamically by CodeIgniter.</p>

			<p>If you would like to edit this page you'll find it located at:</p>
			<code>application/views/welcome_message.php</code>

			<p>The corresponding controller for this page is found at:</p>
			<code>application/controllers/Welcome.php</code>

			<p>If you are exploring CodeIgniter for the very first time, you should start by reading the <a href="user_guide/">User Guide</a>.</p>
		</div>

		<p class="footer">Page rendered in <strong>{{renderTime}}</strong> seconds. CodeIgniter Version <strong>{{codeigniterVersion}}</strong></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['renderTime', 'codeigniterVersion']
		
	}
</script>

<style>

</style>
