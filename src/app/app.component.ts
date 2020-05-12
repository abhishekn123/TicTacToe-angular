import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  target = "x";
  title = "TicTacToe";
  one = "";
  two = "";
  three = "";
  four = "";
  five = "";
  six = "";
  seven = "";
  eight = "";
  nine = "";
  ngOnInit() {}
  playone(value) {
    console.log(value);
    this.one === "" ? (this.one = this.target) : (this.one = this.one);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playtwo(value) {
    console.log(value);
    this.two === "" ? (this.two = this.target) : (this.two = this.two);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playthree(value) {
    console.log(value);
    this.three === "" ? (this.three = this.target) : (this.three = this.three);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playfour(value) {
    console.log(value);
    this.four === "" ? (this.four = this.target) : (this.four = this.four);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playfive(value) {
    console.log(value);
    this.five === "" ? (this.five = this.target) : (this.five = this.five);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playsix(value) {
    console.log(value);
    this.six === "" ? (this.six = this.target) : (this.six = this.six);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playseven(value) {
    console.log(value);
    this.seven === "" ? (this.seven = this.target) : (this.seven = this.seven);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playeight(value) {
    console.log(value);
    this.eight === "" ? (this.eight = this.target) : (this.eight = this.eight);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  playnine(value) {
    console.log(value);
    this.nine === "" ? (this.nine = this.target) : (this.nine = this.nine);
    this.target === "0" ? (this.target = "x") : (this.target = "0");
    this.predictWinner();
  }
  predictWinner() {
    if (this.one != "" && this.one === this.two && this.one === this.three) {
      alert("winner");
    }
    if (this.four != "" && this.four === this.five && this.four === this.six) {
      alert("winner");
    }
    if (
      this.seven != "" &&
      this.seven === this.eight &&
      this.seven === this.nine
    ) {
      alert("winner is " + this.seven);
    }
    if (this.one != "" && this.one === this.four && this.one === this.seven) {
      alert("winner is " + this.one);
    }
    if (this.two != "" && this.two === this.five && this.two === this.eight) {
      alert("winner is " + this.two);
    }
    if (
      this.three != "" &&
      this.three === this.six &&
      this.three === this.nine
    ) {
      alert("winner");
    }
    if (
      this.one != "" &&
      this.two != "" &&
      this.three != "" &&
      this.four != "" &&
      this.five != "" &&
      this.five != "" &&
      this.six != " " &&
      this.seven != "" &&
      this.eight != "" &&
      this.nine != ""
    ) {
      alert("DRAW");
    }
  }
}
