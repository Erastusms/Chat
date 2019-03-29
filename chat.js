function read() {
	axios.get('http://localhost/chat-read.php')
	.then(resp => {
		const chat = document.querySelector('#chat');
		chat.value = resp.data;

		setTimeout(read, 1000);
	});

}

read();

const message = document.querySelector('#message');

message.addEventListener('keyup', e => {
	if (e.keyCode == 13) {
		const text = message.value;
		const url = `http://localhost/chat-write.php?text=${text}`;

		axios.get(url);
		message.value = '';	
}
});