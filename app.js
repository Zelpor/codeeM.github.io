const testLove = () => {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const loveScore = Math.random() * 100;
    let result = "";
    if (loveScore >= 90) {
        var audio = new Audio("Ladies and Gentleman we got him (Meme Sound) - Sound Effect for editing.mp3");
      audio.play();
        document.getElementById("love-gif").style.display = "block";
        document.getElementById("love-gif1").style.display = "none";
        document.getElementById("love-gif2").style.display = "none";
      result = `Percentage of Love between   ${name1}  &  ${name2}  is: ${Math.floor(loveScore)}%. You are perfect for each other.`;
    } else if (loveScore >= 60) {
        var audio1 = new Audio("Machi No Dorufin.mp3");
      audio1.play();
        document.getElementById("love-gif2").style.display = "block";
        document.getElementById("love-gif1").style.display = "none";
        document.getElementById("love-gif").style.display = "none";
      result = `Percentage of Love between   ${name1}  &  ${name2}  is: ${Math.floor(loveScore)}%. You guys are most alive when you're in love with each other. Cheerio!!`;
    } else {
        var audio2 = new Audio("They ask you how you are and you just have to say that you're fine Sound Effect.mp3");
      audio2.play();
        document.getElementById("love-gif1").style.display = "block";
        document.getElementById("love-gif").style.display = "none";
        document.getElementById("love-gif2").style.display = "none";
      result = `Percentage of Love between   ${name1}  &  ${name2}  is: ${Math.floor(loveScore)}%. Work on your relationship.`;
    }
    document.getElementById("result").innerHTML = result;
  };
  
  document.getElementById("test-love").addEventListener("click", testLove);