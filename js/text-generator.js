const chatMessages = document.getElementsByClassName('.chat-box-list');
const inputContainer = document.getElementsByClassName('.new-chat-form');

chatMessages.addEventListener('scroll', () => {
  if (chatMessages.scrollHeight > chatMessages.clientHeight) {
    inputContainer.classList.add('shadow');
  } else {
    inputContainer.classList.remove('shadow');
  }
});

const textarea = document.getElementById('txtarea');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; // ریست کردن ارتفاع
  textarea.style.height = `${textarea.scrollHeight}px`; // تنظیم ارتفاع بر اساس محتوا
});


// اضافه کردن event listener برای کلیک روی پیام
document.addEventListener('click', (event) => {
    const messages = document.querySelectorAll('.chat-content-author');
  
    // اگر کاربر روی پیام کلیک کرده
    if (event.target.closest('.chat-content-author')) {
      const message = event.target.closest('.chat-content-author');
  
      // غیرفعال کردن سایر پیام‌ها
      messages.forEach((msg) => {
        if (msg !== message) {
          msg.classList.remove('active');
        }
      });
  
      // فعال/غیرفعال کردن پیام کلیک‌شده
      message.classList.toggle('active');
    } else {
      // اگر کاربر جای دیگه‌ای کلیک کرده، همه آیکون‌ها رو مخفی کن
      messages.forEach((msg) => {
        msg.classList.remove('active');
      });
    }
  });

function togglesidebar() {
    sidebar.classList.toggle('closed')
    sidebar.classList.toggle('open')
    tuggleButton.classList.toggle('rotate')
}
