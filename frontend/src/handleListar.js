axios.get('http://127.0.0.1:7000/livros', { headers: { 'Access-Control-Allow-Origin': '*' } })
		.then(response => criaListaDinamica(response.data))
		.catch(error => console.log(error))

	const criaListaDinamica = (livros) => {
		const tabelaLivros = document.getElementById('tabela')
		livros.map(livro => {
			let trLivro = document.createElement('tr') // linha da tabela
			let tdId = document.createElement('td') 	//linha de dados
			let tdTitulo = document.createElement('td')
			let tdAutor = document.createElement('td')
			let tdEditora = document.createElement('td')
			let tdAno = document.createElement('td')

			let tdLivros = [tdId, tdTitulo, tdAutor, tdEditora, tdAno]

			for (let i = 0; i < tdLivros.length; i++) {
				tdLivros[i].innerText = Object.values(livro)[i] 
				trLivro.appendChild(tdLivros[i])
			}

			tabelaLivros.append(trLivro)
		})
	}