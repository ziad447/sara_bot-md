let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
  هلا بيك يعمري 😩❤‍🔥   
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
        ♥🐥وعليكم السلام ,  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
 دايما يارب 💎🩵 
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
 مظلوم اككيد😩❤‍🔥 
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
 هتشقطينى يبت 😂😁 
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
 اموت فيك 🌚💔 ,
 اكرهك🙂💔 ,
 احبك نص حب 🙃💔 ,
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
 ماعاش من يكرهكك حبي 🙁 ,
 لا بس لا تتعب نفسك لحبك🫥 ,
 ااه اكرهك🙄 ,   ]; 

     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
        هالو🌚♥ ,  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
        بحبك اكتر🌚❤ ,  

     ]; 
   }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
 هاى يا قلبى  كيف حالك اليوم معاك بوت  زيزو🌚♥️
     ]; 
   } else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
 عارف متزهقنيش🌚 
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
        😘 ,  

     ];
     }else if (/^دايما|دايما يارب|يارب دايما$/i.test(m.text)) { 
     responses = [ 
        🌚♥واياك  ,  
        🌚♥واياكى ,
     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
        هاي ,  

     ];
     }else if (/^اتجوزنى|تجوزنى$/i.test(m.text)) { 
     responses = [ 
        بوسينى اول♥ ,
       🌚♥موافق  ,

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
        اهلا♥ ,  

     ]; 
     }else if (/^مسا|مساء|مثا$/i.test(m.text)) { 
     responses = [ 
        مساء الخير🌚 ,  

     ];
     }else if (/^صباحو|صباح$/ .test(m.text)) { 
     responses = [ 
        صباح الورد♥ ,  
     ];
       }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
        بس يا ابنى ,
       صلى على النبى ,
       ما هو العبب مش عليك العيب على الخروف ال جاب مرا و قال انو جاب راجل و انتو الاتنين خرفان زى بعض ,
     ];
            }else if (/^عامل اى|عامل ايه|عامله ايه$/i.test(m.text)) { 
     responses = [ 
        بخير ,  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
        مرحبا♥ ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
