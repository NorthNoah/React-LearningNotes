import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import "./style.css";
export class App extends PureComponent {
    constructor() {
        super()
        
        this.state = {
            books: [
                { name: "读库2305", price: 42},
                { name: "读库2306", price: 43},
                { name: "读库2307", price: 44}
            ]
        }
    }    
    addNewBook() {
        // 浅拷贝
        const books = [...this.state.books]
        books.push({ name: "读库2400", price: 46})
        this.setState({ books })
    }
    removeBook(index) {
        const books = [...this.state.books]
        books.splice(index, 1)
        this.setState({ books })
    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>书籍列表</h2>
                <TransitionGroup component="ul">
                    {
                        books.map((item, index) => {
                            return (
                                <CSSTransition 
                                    key={index}
                                    classNames="book"
                                    timeout={1000}>
                                    <li>
                                        <span>{item.name}-{item.price}</span>
                                        <button onClick={e => this.removeBook(index)}>删除</button>
                                    </li>
                                </CSSTransition>
                               
                            )
                            
                        })
                    }
                </TransitionGroup>
                <button onClick={e => this.addNewBook()}>添加书籍</button>
            </div>
        )
    }
}

export default App