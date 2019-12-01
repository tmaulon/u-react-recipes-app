import React, { Component } from "react";

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    state = {
        theme: 'seagreen'
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export { ThemeContext }
export default ThemeProvider