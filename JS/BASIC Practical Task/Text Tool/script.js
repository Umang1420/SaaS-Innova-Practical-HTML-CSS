 function feclear() {
      let input = document.getElementById("input");
      document.getElementById("word").innerHTML = "0";
      document.getElementById("count").innerHTML = "0";
      document.getElementById("p").innerHTML = "";
      input.value = " ";
    }
    function getstring() {
      let input = document.getElementById("input").value;
      if (input.length < 300) {
        document.getElementById("count").innerHTML = input.trim().length;
        if (input == "") {
          document.getElementById("word").innerHTML = "0";
        } else {
          document.getElementById("word").innerHTML = input
            .trim()
            .split(" ").length;
        }
      } else {
        alert("Text is too long, reduce it.");
      }
    }

    function wcount() {
      let input = document.getElementById("input").value;

      if (input.length < 300) {
        let words = input.trim().toLowerCase().split(" ");
        let frequency = {};

        for (let i = 0; i < words.length; i++) {
          let currentWord = words[i];
          if (frequency[currentWord]) {
            frequency[currentWord] = frequency[currentWord] + 1;
          } else {
            frequency[currentWord] = 1;
          }
        }

        let list = "";
        let wordKeys = Object.keys(frequency);

            for (let i = 0; i < wordKeys.length; i++) {
                let key = wordKeys[i];
                list += "<div class='word-row'><span>" + key + "</span><span>" + frequency[key] + "</span></div>";
                }

                document.getElementById("lists").innerHTML = list;
                }
    } 