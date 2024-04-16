//------------------------- Importing required libraries -------------------------------//
import MessagesArea from '../MessagesArea/MessagesArea';
import { useRef, useState } from 'react';
import style from './InputArea.module.css';

//------------------------- InputArea function ------------------------------------------//
function InputArea() {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  //----------------------- Using message ref for the typing in the input section -------//
  const messageRef = useRef();
  //----------------------- Using state variable for messages ---------------------------//
  const [message, setMessage] = useState([]);
  //----------------------- Toggle for showing emoji panel ------------------------------//
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  //----------------------- Predefined list of emojis -----------------------------------//
  // const emojis = ["😀", "😂", "🤣", "😍", "😉", "🙌", "👍", "🎉", "💖", "🐱"];
  const emojis = [
    "😀", "😂", "🤣", "😍", "😉", "🙌", "👍", "🎉", "💖", "🐱", // Original set
    "🎂", "👻", "👀", "🚀", "🌈", "🎁", "🔥", "💧", "🎶", "🕺", // Added new emojis
    "🐶", "🌸", "🌟", "🍕", "🏀", "🌍", "🍓", "🌮", "🦄", "🤖"  // More diverse options
  ];
  

  //----------------------- Function for adding an emoji to the input -------------------//
  function addEmoji(emoji) {
    const text = messageRef.current.value + emoji;
    messageRef.current.value = text; // Append emoji to current input text
    messageRef.current.focus(); // Focus back to the input after adding emoji
  }

  //----------------------- function for removing from the messages ---------------------//
  function handleRemove() {
    messageRef.current.value = "";
  }

  //----------------------- function for handleSubmit -----------------------------------//
  function handleSubmit(e) {
    e.preventDefault();
    const messageText = messageRef.current.value;
    const sender = user_list[Math.floor(Math.random() * user_list.length)];
    if (messageText.trim() !== "") {
      const newChat = {
        username: sender,
        message: messageText
      };
      setMessage(prevMessage => [...prevMessage, newChat]);
    }
    handleRemove();
  }

  //------------------------ Returning the UI --------------------------------------------//
  return (
    <>
      <MessagesArea messages={message} />
      <form onSubmit={handleSubmit} className={style.inputArea}>
        <input type="text" className={style.input} ref={messageRef} placeholder="Enter your message here..."/>
        <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className={style.toggleEmojiButton}>😊</button>
        {showEmojiPicker && (
          <div className={style.emojiPicker}>
            {emojis.map(emoji => (
              <button key={emoji} type="button" onClick={() => addEmoji(emoji)} className={style.emojiButton}>
                {emoji}
              </button>
            ))}
          </div>
        )}
        <button type="submit">Send</button>
      </form>
    </>
  )
}

//-------------------------- default exporting function -----------------------------------//
export default InputArea;






// ################################# I AM GETTING ERROR TO ADD EMOJI  THAT KINF I AM COMMENTED IT ##############

// //------------------------- Importing required libraries -------------------------------//
// import MessagesArea from '../MessagesArea/MessagesArea';
// import { useRef, useState } from 'react';
// import style from './InputArea.module.css';
// import { Picker } from 'emoji-mart';
// // import 'emoji-mart/css/emoji-mart.css';


// //------------------------- InputArea function ------------------------------------------//
// function InputArea() {
//   const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
//   const messageRef = useRef();
//   const [message, setMessage] = useState([]);
//   const [showPicker, setShowPicker] = useState(false);

//   //----------------------- function for removing from the messages ---------------------//
//   function handleRemove() {
//     messageRef.current.value = "";
//   }

//   //----------------------- function for handleSubmit -----------------------------------//
//   function handleSubmit(e) {
//     e.preventDefault();
//     const messageText = messageRef.current.value;
//     const sender = user_list[Math.floor(Math.random() * user_list.length)];
//     if(messageText.trim() !== "") {
//       const newChat = {
//         username: sender,
//         message: messageText
//       };
//       setMessage(prevMessage => [...prevMessage, newChat]);
//     }
//     handleRemove();
//   }

//   //----------------------- function for adding emoji to input --------------------------//
//   const onEmojiClick = (emoji) => {
//     const text = messageRef.current.value + emoji.native;
//     messageRef.current.value = text;
//     setShowPicker(false); // Optionally close picker after selection
//   };

//   //------------------------ Returning the UI --------------------------------------------//
//   return (
//     <>
//       <MessagesArea messages={message} />
//       <form onSubmit={handleSubmit} className={style.inputArea}>
//         <div className={style.inputWrapper}>
//           <input type="text" className={style.input} ref={messageRef} placeholder="Enter your message here..."/>
//           <button type="button" className={style.emojiButton} onClick={() => setShowPicker(val => !val)}>😊</button>
//           {showPicker && <Picker onSelect={onEmojiClick} />}
//         </div>
//         <button type="submit" className={style.sendButton}>Send</button>
//       </form>
//     </>
//   )
// }

// //-------------------------- default exporting function -----------------------------------//
// export default InputArea;