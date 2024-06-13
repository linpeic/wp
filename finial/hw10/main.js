const main = document.querySelector('main')

let key = "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"

async function groqChat(qu) {
    if (!qu.trim()) { 
        return "請輸入問題 感謝您! 可以嘗試輸入: 心情不好 or 如何與女友開話題 or 世界上最可愛的狗在哪?";
    }
    
    try{
        if(qu.trim()=="心情不好"){
            return "別擔心 沒有什麼事是一支冰無法解決的! 不行的話就兩支~";
        }
        else if(qu.trim()=="如何與女友開話題"){
            return "現在馬上傳給她 暖她一整天 她就會問你：她是誰? 於是你們之間就會有新的話題可以聊了";
        }
        else if(qu.trim()=="世界上最可愛的狗在哪?"){
            return "在我家";
        }
        const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
            {
                body: JSON.stringify({
                    "model": "llama3-8b-8192",
                    "messages": [{"role": "user", "content": qu}],
                    "temperature": 0.7
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${key}`,
                }
            })
            const jsonData = await jsonResponse.json()
            console.log(JSON.stringify(jsonData, null, 2))
            return jsonData.choices[0].message.content
    }
    catch{
        return jsonData.choices.message.content="請輸入問題 感謝您!";
    }
    
}
async function chat() {
    let qNode = document.querySelector('#question')
    let responseNode = document.querySelector('#response')
    responseNode.innerText = '詢問中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value)
    responseNode.innerText = answer
}
