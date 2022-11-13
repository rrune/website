class Terminal {
  constructor(inputElement, outputElement) {
    this._input = inputElement;
    this._output = outputElement;
  }
  write(text, link) {
    let out;
    if (link) {
      out =  document.createElement("a");
      out.setAttribute("href", link)
      out.setAttribute("target", "_blank")
    } else {
      out = document.createElement("p");
    }
    out.innerHTML = text;
    this._output.appendChild(out);
  }
}

terminal = new Terminal(
  document.getElementById("in"),
  document.getElementById("out")
);

let info = {
  twitter: {
    name: "_ruune_",
    link: "https://twitter.com/_ruune_",
    print: function () {
      terminal.write(
        this.name,
        this.link
      );
    },
  },
  mail: {
    name: "rune@ruune.de",
    link: "mailto:rune@ruune.de",
    print: function () {
      terminal.write(
        this.name,
        this.link
      );
    },
  },
  steam: {
    name: "ruunee",
    link: "https://steamcommunity.com/id/ruunee/",
    print: function () {
      terminal.write(
        this.name,
        this.link
      );
    },
  },
  anilist: {
    name: "Ruune",
    link: "https://anilist.co/user/ruune",
    print: function () {
      terminal.write(
        this.name,
        this.link
      );
    },
  },
  github: {
    name: "rrune",
    link: "https://github.com/rrune",
    print: function () {
      terminal.write(
        this.name,
        this.link
      );
    },
  },
  discord: {
    name: "Rune#4312",
    print: function () {
      terminal.write(this.name);
    },
  },
  keybase: {
    name: "ruune",
    print: function () {
      terminal.write(this.name);
    },
  },
  minecraft: {
    name: "Quantenqhysik",
    print: function () {
      terminal.write(this.name);
    },
  },
  about: {
    name: "I don't do much. Little bit gaming, little bit coding. Sometimes I read or watch something",
    print: function () {
      terminal.write(this.name);
    },
  },
  clear: {
    print: function () {
      document.getElementById("out").innerHTML = "";
    },
  },
  exit: {
    print: function () {
      document.getElementById("out").innerHTML = "";
      terminal.write("enter help for help");
      parent.closeIFrame();
    },
  },
  help: {
    print: function () {
      terminal.write("these following commands exist:");
      for (let e in info) {
        terminal.write(e);
      }
    },
  },
};

terminal.write("enter help for help");
document.getElementById("in").focus();

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    run();
  }
});
document.addEventListener("mouseup", (e) => {
  document.getElementById("in").focus();
});

function run() {
  //print command
  terminal.write(`> ${document.getElementById("in").value}`);

  //unknown command
  if (
    typeof info[document.getElementById("in").value.toLowerCase()] ==
    "undefined"
  ) {
    terminal.write("unknown command");
  } else {
    //commands
    for (let e in info) {
      if (document.getElementById("in").value.toLowerCase() == e) {
        info[e].print();
      }
    }
  }

  //reset input
  document.getElementById("in").value = "";

  //scroll down
  window.scrollTo(0, document.body.scrollHeight);
}
