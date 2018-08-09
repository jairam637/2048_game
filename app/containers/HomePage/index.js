import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Swipe from 'react-swipe-component'
import './style.css'
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      colors: { 0: "zero", 2: "two", 4: "four", 8: "eight", 16: "sixteen", 32: "thirty-two", 64: "sixty-four", 128: "one-twenty-eight", 256: "two-fifty-six", 512: "five-twelve", 1024: "thousond-twenty-four", 2048: "twenty-forty-eight" }
    }
  }
  keyPress(data) {
    if (data == "down") {
      let empty = []
      let row = null
      this.numbers = this.state.numbers;
      for (let i = 2; i >= 0; i--) {
        for (let j = 0; j < 4; j++) {
          let z = i + 1;
          let loop = true;
          let doSum = true
          while (z != 4 && loop) {
            if (this.numbers[i][j] == this.numbers[z][j]) {
              if (this.numbers[i][j] != 0 && this.numbers[i][j] == this.numbers[z][j]) {
              }
              if (doSum) {
                this.numbers[z][j] = this.numbers[i][j] + this.numbers[z][j];
                this.numbers[i][j] = 0;
              }
              loop = false;
              let m = z + 1;
              let k = 4
              while (m != 4 && this.numbers[m][j] == 0) {
                k = m
                m = m + 1;
              }
              if (k != 4) {
                this.numbers[k][j] = this.numbers[z][j];
                this.numbers[z][j] = 0;
              }
            }
            else if (this.numbers[i][j] != this.numbers[z][j] && this.numbers[i][j] != 0) {
              doSum = false;
            }
            z = z + 1
          }
        }
      }
      for (let i = 2; i >= 0; i--) {
        for (let j = 0; j < 4; j++) {
          let z = i + 1;
          let loop = true;
          let k = z;
          while (z != 4 && loop && this.numbers[z][j] == 0 && this.numbers[z - 1][j] != 0) {
            this.numbers[z][j] = this.numbers[z - 1][j];
            this.numbers[z - 1][j] = 0;
            z = z + 1;
          }
        }
      }
      for (let i = 3; i >= 0; i--) {
        for (let j = 0; j < 5; j++) {
          if (this.numbers[i][j] == 0) {
            empty.push(j)
          }
        }
        row = i;
        if (empty.length != 0)
          break;
      }
      this.numbers[row][empty[0]] = 2;

    }


    else if (data == "up") {
      let empty = []
      let row = null
      this.numbers = this.state.numbers;
      for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          let z = i - 1;
          let loop = true;
          let doSum = true
          while (z != -1 && loop) {
            if (this.numbers[i][j] == this.numbers[z][j]) {
              if (this.numbers[i][j] != 0 && this.numbers[i][j] == this.numbers[z][j]) {
              }
              if (doSum) {
                this.numbers[z][j] = this.numbers[i][j] + this.numbers[z][j];
                this.numbers[i][j] = 0;
              }
              loop = false;
              let m = z - 1;
              let k = -1
              while (m != -1 && this.numbers[m][j] == 0) {
                k = m
                m = m - 1;
              }
              if (k != -1) {
                this.numbers[k][j] = this.numbers[z][j];
                this.numbers[z][j] = 0;
              }
            }
            else if (this.numbers[i][j] != this.numbers[z][j] && this.numbers[i][j] != 0) {
              doSum = false;
            }
            z = z - 1
          }
        }
      }
      for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          let z = i - 1;
          let loop = true;
          let k = z;
          while (z != -1 && loop && this.numbers[z][j] == 0 && this.numbers[z + 1][j] != 0) {
            this.numbers[z][j] = this.numbers[z + 1][j];
            this.numbers[z + 1][j] = 0;
            z = z - 1;
          }
        }
      }
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (this.numbers[i][j] == 0) {
            empty.push(j)
          }
        }
        row = i;
        if (empty.length != 0)
          break;
      }
      this.numbers[row][empty[0]] = 2;

    }




    else if (data == "left") {
      let empty = []
      let row = null
      this.numbers = this.state.numbers;
      for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
          let z = j - 1;
          let loop = true;
          let doSum = true
          while (z != -1 && loop) {
            if (this.numbers[i][j] == this.numbers[i][z]) {
              if (this.numbers[i][j] != 0 && this.numbers[i][j] == this.numbers[i][z]) {
              }
              if (doSum) {
                this.numbers[i][z] = this.numbers[i][j] + this.numbers[i][z];
                this.numbers[i][j] = 0;
              }
              loop = false;
              let m = z - 1;
              let k = -1
              while (m != -1 && this.numbers[i][m] == 0) {
                k = m
                m = m - 1;
              }
              if (k != -1) {
                this.numbers[i][k] = this.numbers[i][z];
                this.numbers[i][z] = 0;
              }
            }
            else if (this.numbers[i][j] != this.numbers[i][z] && this.numbers[i][j] != 0) {
              doSum = false;
            }
            z = z - 1
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
          let z = j - 1;
          let loop = true;
          let k = z;
          while (z != -1 && loop && this.numbers[i][z] == 0 && this.numbers[i][z + 1] != 0) {
            this.numbers[i][z] = this.numbers[i][z + 1];
            this.numbers[i][z + 1] = 0;
            z = z - 1;
          }
        }
      }
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (this.numbers[i][j] == 0) {
            empty.push(j)
          }
        }
        row = i;
        if (empty.length != 0)
          break;
      }
      this.numbers[row][empty[0]] = 2;

    }



    if (data == "right") {
      let empty = []
      let row = null
      this.numbers = this.state.numbers;
      for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
          let z = j + 1;
          let loop = true;
          let doSum = true
          while (z != 4 && loop) {
            if (this.numbers[i][j] == this.numbers[i][z]) {
              if (this.numbers[i][j] != 0 && this.numbers[i][j] == this.numbers[i][z]) {
              }
              if (doSum) {
                this.numbers[i][z] = this.numbers[i][j] + this.numbers[i][z];
                this.numbers[i][j] = 0;
              }
              loop = false;
              let m = z + 1;
              let k = 4
              while (m != 4 && this.numbers[i][m] == 0) {
                k = m
                m = m + 1;
              }
              if (k != 4) {
                this.numbers[i][k] = this.numbers[i][z];
                this.numbers[i][z] = 0;
              }
            }
            else if (this.numbers[i][j] != this.numbers[i][z] && this.numbers[i][j] != 0) {
              doSum = false;
            }
            z = z + 1
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
          let z = j + 1;
          let loop = true;
          let k = z;
          while (z != 4 && loop && this.numbers[i][z] == 0 && this.numbers[i][z - 1] != 0) {
            this.numbers[i][z] = this.numbers[i][z - 1];
            this.numbers[i][z - 1] = 0;
            z = z + 1;
          }
        }
      }
      for (let i = 0; i < 5; i++) {
        for (let j = 3; j >= 0; j--) {
          if (this.numbers[i][j] == 0) {
            empty.push(j)
          }
        }
        row = i;
        if (empty.length != 0)
          break;
      }
      this.numbers[row][empty[0]] = 2;

    }
    this.setState({ numbers: this.numbers }, this.forceUpdate())
  }
  render() {
    let num = { ...this.state.numbers }
    return (
      <div>
        <Swipe
          nodeName="div"
          className="test"
          mouseSwipe={false}
          // onSwipeEnd={this.onSwipeEnd}
          onSwipedLeft={this.keyPress.bind(this, "left")}
          onSwipedRight={this.keyPress.bind(this, "right")}
          onSwipedDown={this.keyPress.bind(this, "down")}
          onSwipedUp={this.keyPress.bind(this, "up")}
        // onSwipe={this.onSwipeListener}
        >
          <div className="main-div">
            <div className="rows row-one">
              <div className={this.state.colors[num[0][0]] + " tile"}>{this.state.numbers[0][0]}</div>
              <div className={this.state.colors[num[0][1]] + " tile"}>{this.state.numbers[0][1]}</div>
              <div className={this.state.colors[num[0][2]] + " tile"}>{this.state.numbers[0][2]}</div>
              <div className={this.state.colors[num[0][3]] + " tile"}>{this.state.numbers[0][3]}</div>
            </div>

            <div className="rows row-two">
              <div className={this.state.colors[num[1][0]] + " tile"}>{this.state.numbers[1][0]}</div>
              <div className={this.state.colors[num[1][1]] + " tile"}>{this.state.numbers[1][1]}</div>
              <div className={this.state.colors[num[1][2]] + " tile"}>{this.state.numbers[1][2]}</div>
              <div className={this.state.colors[num[1][3]] + " tile"}>{this.state.numbers[1][3]}</div>
            </div>

            <div className="rows row-three">
              <div className={this.state.colors[num[2][0]] + " tile"}>{this.state.numbers[2][0]}</div>
              <div className={this.state.colors[num[2][1]] + " tile"}>{this.state.numbers[2][1]}</div>
              <div className={this.state.colors[num[2][2]] + " tile"}>{this.state.numbers[2][2]}</div>
              <div className={this.state.colors[num[2][3]] + " tile"}>{this.state.numbers[2][3]}</div>
            </div>
            <div className="rows row-three">
              <div className={this.state.colors[num[3][0]] + " tile"}>{this.state.numbers[3][0]}</div>
              <div className={this.state.colors[num[3][1]] + " tile"}>{this.state.numbers[3][1]}</div>
              <div className={this.state.colors[num[3][2]] + " tile"}>{this.state.numbers[3][2]}</div>
              <div className={this.state.colors[num[3][3]] + " tile"}>{this.state.numbers[3][3]}</div>
            </div>
          </div>
        </Swipe>
        <div className="arrow-btns">
          <div className="up key" onClick={this.keyPress.bind(this, "up")}>^</div>
          <div className="buttons">
            <div className="rotate key" onClick={this.keyPress.bind(this, "left")}> > </div>
            <div className="right-button key" onClick={this.keyPress.bind(this, "right")}>></div>
          </div>
          <div className="rotate down key" onClick={this.keyPress.bind(this, "down")}>^</div>
        </div>
      </div>
    );
  }
}
