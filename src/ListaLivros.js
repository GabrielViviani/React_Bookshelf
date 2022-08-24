import React from "React"
import axios from axios

export default class ListaLivros extends React.Component{
    
    state={
        livros:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/books')
            .then(res=>{
                const dadosLivros = res.data
                this.setState({livros:dadosLivros})
            })
    }

    render(){
        return(
            <div>
                {this.state.livros.map(
                    livro=> <div key={livro.title}>{livro.id} - {livro.author}</div>
                )}
            </div>
        )
    }
}