'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComboApp = function (_React$Component) {
    _inherits(ComboApp, _React$Component);

    function ComboApp() {
        _classCallCheck(this, ComboApp);

        return _possibleConstructorReturn(this, (ComboApp.__proto__ || Object.getPrototypeOf(ComboApp)).apply(this, arguments));
    }

    _createClass(ComboApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Combo Generator'
                ),
                React.createElement(
                    'p',
                    null,
                    ' Small guide: '
                ),
                React.createElement(
                    'p',
                    null,
                    ' T = right trigger, R = right button, V = vanish, X = sparking, DJ = double jump, D = delay, J = In air,  '
                ),
                React.createElement(InputCombo, null)
            );
        }
    }]);

    return ComboApp;
}(React.Component);

var InputCombo = function (_React$Component2) {
    _inherits(InputCombo, _React$Component2);

    function InputCombo(props) {
        _classCallCheck(this, InputCombo);

        var _this2 = _possibleConstructorReturn(this, (InputCombo.__proto__ || Object.getPrototypeOf(InputCombo)).call(this, props));

        _this2.onChange = _this2.onChange.bind(_this2);
        _this2.state = {
            combo: '',
            value: ''
        };
        return _this2;
    }

    _createClass(InputCombo, [{
        key: 'onChange',
        value: function onChange(e) {
            // TODO - FIND A BETTER WAY TO DO KEYS

            var sValue = e.target.value.toUpperCase().replace(/[^LMHSAJDXRVT,>.123456789 ]/g, '');
            var aCombo = sValue.replace(/ |5|\./g, '').replace(/SD/g, 'T') // T Is RT 
            .replace(/DR/g, 'R') // R is RB
            .replace(/DJ/g, 'I') // I is Jump
            .replace(/J/g, 'U') // U is in air
            .replace(/236/g, 'F') //F is quartercircle forwards 
            .replace(/214/g, 'B') // B is quartercircle backwards
            .split(/[\,>]+/).filter(function (x) {
                return x;
            }).map(function (commands, i) {
                var returnValue = [];
                for (var _i = 0; _i < commands.length; _i++) {
                    returnValue.push(React.createElement('img', { key: _i + Math.random(), src: 'assets/' + commands[_i] + '.png' }));
                }
                return React.createElement(
                    'div',
                    { key: i, className: 'margin-right section' },
                    returnValue
                );
            });
            this.setState(function () {
                return {
                    value: sValue,
                    combo: aCombo
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { onChange: this.onChange, value: this.state.value, type: 'text', name: 'txtCombo' }),
                React.createElement(
                    'div',
                    { className: 'displayCombo' },
                    this.state.combo
                )
            );
        }
    }]);

    return InputCombo;
}(React.Component);

ReactDOM.render(React.createElement(ComboApp, null), document.getElementById('app'));
