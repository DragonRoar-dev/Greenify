// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Close other open FAQs
            faqQuestions.forEach(item => {
                if (item !== question && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        });
    });
    
    // Donation amount buttons
    const amountBtns = document.querySelectorAll('.amount-btn');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons in this form
            const form = this.closest('.donation-form');
            form.querySelectorAll('.amount-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Clear any custom amount input
            const customInput = form.querySelector('input[type="number"]');
            if (customInput) {
                customInput.value = '';
            }
        });
    });
    
    // Clear amount selection when custom input is used
    const customAmountInputs = document.querySelectorAll('.donation-form input[type="number"]');
    
    customAmountInputs.forEach(input => {
        input.addEventListener('input', function() {
            const form = this.closest('.donation-form');
            form.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Subscribe form handling
const subscribeForm = document.querySelector('.newsletter form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const modal = document.getElementById('subscribeModal');
        modal.style.display = 'block';
        
        // Clear the input
        this.querySelector('input[type="email"]').value = '';
        
        // Close modal when clicking X
        document.querySelector('.close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Get Involved Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Volunteer Sign Up buttons
    const volunteerBtns = document.querySelectorAll('.option .btn');
    volunteerBtns.forEach(btn => {
        if (btn.textContent.includes('Sign Up') || btn.textContent.includes('Register')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const modal = document.getElementById('volunteerModal');
                modal.style.display = 'block';
            });
        }
    });

    // Event Registration buttons
    const eventBtns = document.querySelectorAll('.event .btn');
    eventBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventTitle = this.closest('.event').querySelector('h3').textContent;
            const modal = document.getElementById('eventModal');
            modal.querySelector('#eventModalTitle').textContent = `Register for ${eventTitle}`;
            modal.style.display = 'block';
        });
    });

    // Close modals
    const closeModalBtns = document.querySelectorAll('.close-modal');
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Form submissions
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your volunteer application! We will contact you soon.');
            this.reset();
            document.getElementById('volunteerModal').style.display = 'none';
        });
    }

    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your event registration has been received! See you there.');
            this.reset();
            document.getElementById('eventModal').style.display = 'none';
        });
    }

    // FAQ functionality is already in the original script.js
});

// Donate Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Donation amount buttons
    const amountBtns = document.querySelectorAll('.amount-btn');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons in this form
            const form = this.closest('.donation-form');
            form.querySelectorAll('.amount-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Clear any custom amount input
            const customInput = form.querySelector('input[type="number"]');
            if (customInput) {
                customInput.value = '';
            }
        });
    });

    // Clear amount selection when custom input is used
    const customAmountInputs = document.querySelectorAll('.donation-form input[type="number"]');
    
    customAmountInputs.forEach(input => {
        input.addEventListener('input', function() {
            const form = this.closest('.donation-form');
            form.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        });
    });

    // FAQ functionality is already in the original script.js
});

// Get Involved Page Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Advocate Button
    const advocateBtn = document.querySelector('.option:nth-child(2) .btn');
    if (advocateBtn) {
        advocateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('advocateModal').style.display = 'block';
        });
    }

    // Internship Button
    const internshipBtn = document.querySelector('.option:nth-child(3) .btn');
    if (internshipBtn) {
        internshipBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('internshipModal').style.display = 'block';
        });
    }

    // Chapter Button
    const chapterBtn = document.querySelector('.option:nth-child(4) .btn');
    if (chapterBtn) {
        chapterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('chapterModal').style.display = 'block';
        });
    }

    // Learn More Button
    const learnMoreBtn = document.querySelector('.option:nth-child(5) .btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'donate.html#corporate-matching';
        });
    }

    // Donate Now Button
    const donateNowBtn = document.querySelector('.option:nth-child(1) .btn');
    if (donateNowBtn && donateNowBtn.textContent.includes('Donate Now')) {
        donateNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('donateModal').style.display = 'block';
        });
    }

    // Monthly Giving Button
    const monthlyBtn = document.querySelector('.option:nth-child(2) .btn');
    if (monthlyBtn && monthlyBtn.textContent.includes('Monthly Giving')) {
        monthlyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('monthlyModal').style.display = 'block';
        });
    }

    // Form Submissions
    const advocateForm = document.getElementById('advocateForm');
    if (advocateForm) {
        advocateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest in becoming an advocate! We will contact you with more information.');
            this.reset();
            document.getElementById('advocateModal').style.display = 'none';
        });
    }

    const internshipForm = document.getElementById('internshipForm');
    if (internshipForm) {
        internshipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your internship application has been received! We will review it and get back to you within 2 weeks.');
            this.reset();
            document.getElementById('internshipModal').style.display = 'none';
        });
    }

    const chapterForm = document.getElementById('chapterForm');
    if (chapterForm) {
        chapterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your chapter application! Our team will contact you to discuss next steps.');
            this.reset();
            document.getElementById('chapterModal').style.display = 'none';
        });
    }

    const donateForm = document.getElementById('donateForm');
    if (donateForm) {
        donateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your donation! A receipt has been sent to your email.');
            this.reset();
            document.getElementById('donateModal').style.display = 'none';
        });
    }

    const monthlyForm = document.getElementById('monthlyForm');
    if (monthlyForm) {
        monthlyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for setting up monthly giving! Your first donation will be processed shortly.');
            this.reset();
            document.getElementById('monthlyModal').style.display = 'none';
        });
    }
});

// Contact Us Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const modal = document.getElementById('contactModal');
            modal.style.display = 'block';
            this.reset();
        });
    }

    // Social Media Links
    const socialLinks = {
        'facebook': 'https://facebook.com/greenify',
        'twitter': 'https://twitter.com/greenify',
        'instagram': 'https://instagram.com/greenify',
        'linkedin': 'https://linkedin.com/company/greenify',
        'youtube': 'https://youtube.com/greenify',
        'tiktok': 'https://tiktok.com/@greenify'
    };

    document.querySelectorAll('.social-icons a').forEach(link => {
        const platform = link.querySelector('i').className.split('-')[1];
        if (socialLinks[platform]) {
            link.href = socialLinks[platform];
            link.target = '_blank';
        }
    });

    document.querySelectorAll('.social-link').forEach(link => {
        const platform = link.querySelector('i').className.split('-')[1];
        if (socialLinks[platform]) {
            link.href = socialLinks[platform];
            link.target = '_blank';
        }
    });

    // Close modal button
    document.querySelector('.close-modal-btn')?.addEventListener('click', function() {
        document.getElementById('contactModal').style.display = 'none';
    });
});

// Donate Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Donate Now Button
    const donateNowBtn = document.querySelector('.option:nth-child(1) .btn');
    if (donateNowBtn && donateNowBtn.textContent.includes('Donate Now')) {
        donateNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('donateNowModal').style.display = 'block';
        });
    }

    // Monthly Giving Button
    const monthlyGivingBtn = document.querySelector('.option:nth-child(2) .btn');
    if (monthlyGivingBtn && monthlyGivingBtn.textContent.includes('Monthly Giving')) {
        monthlyGivingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('monthlyGivingModal').style.display = 'block';
        });
    }

    // Learn More Button
    const learnMoreBtn = document.querySelector('.option:nth-child(3) .btn');
    if (learnMoreBtn && learnMoreBtn.textContent.includes('Learn More')) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('learnMoreModal').style.display = 'block';
        });
    }

    // Amount Selection in Modals
    document.querySelectorAll('.modal .amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const form = this.closest('.amount-selector');
            form.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const amountInput = form.querySelector('input[type="number"]');
            amountInput.value = this.textContent;
        });
    });

    // Clear amount selection when custom input is used
    document.querySelectorAll('.modal input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            const form = this.closest('.amount-selector');
            form.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        });
    });

    // Form Submissions
    const donateNowForm = document.getElementById('donateNowForm');
    if (donateNowForm) {
        donateNowForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('donateNowModal').style.display = 'none';
            document.getElementById('donationSuccessModal').style.display = 'block';
            this.reset();
        });
    }

    const monthlyGivingForm = document.getElementById('monthlyGivingForm');
    if (monthlyGivingForm) {
        monthlyGivingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('monthlyGivingModal').style.display = 'none';
            document.getElementById('donationSuccessModal').style.display = 'block';
            this.reset();
        });
    }

    // Close modals
    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });

    // Close when clicking outside modal
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});