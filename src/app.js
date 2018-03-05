class ComboApp extends React.Component {
    render() {
        return (
            <div>
            <h1>Combo Generator</h1>
            <p> Small guide: </p>
            <p> T = right trigger, R = right button, V = vanish, X = sparking, DJ = double jump, D = delay, J = In air,  </p>
                <InputCombo />
            </div>
        )
    }
}

class InputCombo extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            combo: '',
            value: ''
        }
    }

    onChange(e) {
        // TODO - FIND A BETTER WAY TO DO KEYS

        const sValue = e.target.value.toUpperCase().replace(/[^LMHSAJDXRVT,>.123456789 ]/g, '')
        let aCombo = sValue.replace(/ |5|\./g, '')
                           .replace(/SD/g, 'T') // T Is RT 
                           .replace(/DR/g, 'R') // R is RB
                           .replace(/DJ/g, 'I') // I is Jump
                           .replace(/J/g,'U')   // U is in air
                           .replace(/236/g, 'F') //F is quartercircle forwards 
                           .replace(/214/g,'B')  // B is quartercircle backwards
        .split(/[\,>]+/).filter(x => x).map((commands, i) => {
            let returnValue = []
            for (let i=0; i < commands.length; i++){
                returnValue.push(<img key={i+Math.random()} src={`assets/${commands[i]}.png`}/>)
            }
            return (
                <div key={i} className="margin-right section">
                    {returnValue}
                </div>
            )
        })       
            this.setState(() => {
                return {
                    value: sValue,
                    combo: aCombo
                }
            })
    }
    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.state.value} type="text" name="txtCombo" />
                <div className="displayCombo">{this.state.combo}</div>  
                </div>
                
            )
        }
    }

ReactDOM.render(<ComboApp />, document.getElementById('app'))