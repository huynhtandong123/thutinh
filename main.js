// Thay đổi nội dung búc thư ở đây
var letterContent =" Nhi nè, bé có mệt không đó 😿, bé biết không, anh nhớ em bé nhiều lắm, anh thấy dạo này anh tệ quá, hay làm bé buồn , chắc bé khó chịu về vài hành động của anh lắm ha,bé học mệt, vừa học vừa lo cho anh,anh xúc động nhiều lắm,bé biết không, anh trận trọng em bé lắm đó,anh biết bản thân anh dễ bị ốm , dễ mệt, dễ hờn dỗi , dễ ghen, nhưng anh thương em bé của anh nhiều lắm , không phải anh hay làm quá lên với muốn kiểm soát bé đâu, thật ra anh sợ mất bé lắm , thự sự sợ đến mất ăn mất ngủ , sợ mình không đủ tốt , không còn cho bé cảm giác an toàn nữa sợ làm bé chán , bé không cần anh nữa, sợ ai đó tốt hơn anh cướp bé đi mất ,thế nên anh luoonn cố gắng làm cho bé vui dù biết là bé luôn có mình anh nhưng đôi khi nỗi sợ nó chiếm hưu anh , ai mà không ghen khi thế giới của anh bị để ý chứ,nhưng rồi anh nhận ra rằng thay vì cứ hay để bản thân làm quá lên thế ,sao mình không yêu em bé 1 cách thật đẹp,mãi mới có 1 cô gái vì anh mà mất ngủ , vì anh mà ăn không ngon , vì anh mà kìm nén nhiều loại cảm xúc , thật sự nếu đánh mất bé anh thấy mình là 1 kẻ tòi chẳng đáng để tha thứ , vậy nên từ giờ anh sẽ yêu e bé theo cách tuyệt vời nhất , như lúc trước , là bụt của em bé , là nơi an toàn nhất cho bé tựa vào khi mệt mỏi , là người luôn động viên bé cho bé những lời khuyên tốt nhất, là người luôn lắng nghe câu chuyện của bé ,buồn cùng bé vui cùng bé, khi không có ai để trút nỗi buồn, tìm đến anh nhé, hiện tại em bé đang trong mùa thi cử thế nên đôi lúc bọn mình k dành thời gian cho nhau được,có thể khoảng tg này chúng mình dễ bị gây nhau , bé cứ ráng học  làm những gì bé thích anh luôn ở phía sau ủng hộ em bé hết mình , dạo này anh cũng hay ốm lắm , nhớ bé nhiều lắm,anh hay bị đau dạ dày do anh hay ăn linh tinh á hehe, cũng hay bị mệt do làm nhìu qué , anh bị trên dí dữ lắm , đôi khi biết mình phải cạnh em bé nhưng mà anh đuối quá anh gục mất , tha lỗi cho anh nha, tha lỗi những lần anh không thể lo lắng cho bé nhiều được, nè nha bé đang ốm đó  nhớ ăn uống , uống thuốc cho cẩn thận, k uống đá nhiều nha , bé không biết anh lo nhường nào đâu, mỗi lần bé gặ chuyện anh cuống lắm , em bé có sao k , làm gì h ta , hay mình chạy lên bé ta, sao không dồn mọi thứ xui xẻo lên đầu anh đi chứ , anh luôn muốn em bé được hạnh phúc, anh thì sao cũng đươc, dành mọi điều tốt nhất cho bé , anh vẫn luôn ở đây , mọi lúc khi bé cần , nhớ là k được khóc nhiều đâu đó, mắt bé đẹp lắm nhất là khi đang cười với anh , cố gắng thuuiii sắp được gặ em bé rồi ,anh yêu em bé HẠ NHI nhiều nhắm ☃️🌞 "

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
