// Goyang 바이브 코딩 실습 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Goyang AI 교육 프로젝트 시작!');
    
    // 페이지 로드 시 환영 메시지 표시
    showWelcomeMessage();
    
    // 타임라인 애니메이션
    animateTimeline();
});

function showWelcomeMessage() {
    const greeting = '고양 지역 AI 교육 프로젝트에 오신 것을 환영합니다! 🎉';
    console.log(greeting);
}

// 기본 함수들
function helloWorld() {
    return 'Hello World';
}

function displayMessage(msg) {
    console.log(msg);
    alert(msg);
}

// 타임라인 애니메이션 함수
function animateTimeline() {
    const historyItems = document.querySelectorAll('.history-item');
    
    historyItems.forEach((item, index) => {
        // 각 아이템에 애니메이션 딜레이 적용
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        
        // 약간의 지연 후 애니메이션 시작
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100);
    });
}

// 호버 효과 추가
document.addEventListener('DOMContentLoaded', function() {
    const historyItems = document.querySelectorAll('.history-item');
    
    historyItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
            this.style.paddingLeft = '1rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.paddingLeft = '0';
        });
    });
    
    // 자매도시 카드 호버 효과 추가
    const cityCards = document.querySelectorAll('.city-card');
    
    cityCards.forEach((card, index) => {
        // 로드 시 애니메이션
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 100);
        
        // 클릭 이벤트
        card.addEventListener('click', function() {
            const cityName = this.querySelector('strong').textContent;
            const region = this.querySelector('p').textContent;
            console.log(`선택한 자매도시: ${cityName} - ${region}`);
        });
    });
});
