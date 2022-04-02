// Select the start game button
document.querySelector(".control-buttons span").onclick = function startGame() {
    // prpmpt window to ask for name
    let yourName = prompt("whats your name");
    // if name is empty
    if(yourName == null || yourName == "") {
        // set name to unknown
        document.querySelector(".name span").innerHTML = "Unknown";
        document.getElementById('welcome').play();
        // name is not empty
    } else {
        // set name to your name
        document.querySelector(".name span").innerHTML = yourName;
        document.getElementById('welcome').play();

    }
    // remove splash screen 
    document.querySelector(".control-buttons").remove();
 };

    // Effect duration
    let duration = 1000;

    // select blocks container
    let blocksContainer = document.querySelector(".memory-game-blocks");

    // create array from game blocks

    let blocks = Array.from(blocksContainer.children);
    // create range of keys

    let orderRange = [...Array(blocks.length).keys()];
    // add order css property to game blocks

    shuffle(orderRange);

    // add order css property to game blocks
    blocks.forEach((block, index) => {
    // add  css order property 
    block.style.order = orderRange[index];
    // add click Event 
    block.addEventListener('click', function() {

        // trigger the flip block function 
        flipBlock(block);
       
    });
    });
   //  stop clicking function
   function stopClicking() {

       // add class no clicking on main container 
       blocksContainer.classList.add('no-clicking');
       setTimeout(() => {
        // remove class no clicking after the duration 
        blocksContainer.classList.remove('no-clicking');
       }, duration);
   }
   // create shuffle function
   function shuffle(array) {
       // settings vars
       let current = array.length,
       temp,
       random;
       while(current > 0) {
           // Get random number
           random = Math.floor(Math.random() * current);
           // Decrease length by one
           current--;
           // [1] save current element in stash
           temp = array[current];
           // [2] Current Element = Random Element
           array[current] = array[random];
           // [3] Random Element = Get element from stash
           array[random] = temp;
       }
       return array;
   }

  // flip block function

  function flipBlock(selectedBlock) {
      // add class is-flipped
      selectedBlock.classList.add('is-flipped');
      // collect all flipped cards
      let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

      // if theres two selected blocks

      if(allFlippedBlocks.length === 2) {
          stopClicking();
         checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
      }
           
  }
  
  // check matched block
  
  function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');
    if(firstBlock.dataset.animals === secondBlock.dataset.animals) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        document.getElementById('success').play();
        } else {
            triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
            setTimeout(() => {
                firstBlock.classList.remove('is-flipped');
                secondBlock.classList.remove('is-flipped');
            }, duration);
            document.getElementById('fail').play();

        }
  }
  
 /*
  // function finish game 
  function finishGame() {
      
    let everyFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('has-match'));
    if(everyFlippedBlocks.length === 20) {
        console.log("collect finsh");
        document.querySelector('.all-game').remove();
        startGame();
    }
  
  }
 
كنت اريد انهاء اللعبة لما تختار الجميع وال
all-gameيشمل جميع
 اللعبة في افةم لكن الكود لا يعمل فيه خطا بسيط ساتركه الان  وساحذف من
  htmlمن الكود ال1ي يشمل اللعبة كلها
 الكتابة لانها عربي غير مرتبة مع الانجليزي ملحوظة
  */