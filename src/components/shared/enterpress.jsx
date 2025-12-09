<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geekink - Enterprise Learning Solutions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #2a5bd7;
            --primary-dark: #1e429f;
            --secondary: #10b981;
            --light-bg: #f8fafc;
            --dark-text: #1e293b;
            --light-text: #64748b;
            --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        body {
            background-color: #f1f5f9;
            color: var(--dark-text);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            padding: 80px 0 60px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="rgba(255,255,255,0.05)" d="M0,0 L100,0 L100,100 Z"></path></svg>');
            background-size: cover;
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 15px;
            display: inline-block;
        }
        
        .logo span {
            color: #ffd166;
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .subtitle {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }
        
        /* Main Content */
        .main-content {
            padding: 60px 0;
        }
        
        .intro-section {
            background-color: white;
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 50px;
            box-shadow: var(--card-shadow);
            text-align: center;
        }
        
        .intro-section p {
            font-size: 1.1rem;
            color: var(--light-text);
            max-width: 800px;
            margin: 0 auto;
        }
        
        /* Features Grid */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .feature-card {
            background-color: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: var(--card-shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-top: 4px solid var(--primary);
        }
        
        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }
        
        .feature-card.offline {
            border-top-color: var(--secondary);
        }
        
        .feature-icon {
            background-color: rgba(42, 91, 215, 0.1);
            color: var(--primary);
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 24px;
        }
        
        .feature-card.offline .feature-icon {
            background-color: rgba(16, 185, 129, 0.1);
            color: var(--secondary);
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark-text);
        }
        
        .feature-card p {
            color: var(--light-text);
            margin-bottom: 20px;
            font-size: 0.95rem;
        }
        
        .feature-list {
            list-style-type: none;
        }
        
        .feature-list li {
            padding: 8px 0;
            color: var(--dark-text);
            position: relative;
            padding-left: 30px;
        }
        
        .feature-list li:before {
            content: "\f00c";
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
            position: absolute;
            left: 0;
            color: var(--secondary);
        }
        
        /* Divider */
        .divider {
            height: 1px;
            background-color: #e2e8f0;
            margin: 40px 0;
            position: relative;
        }
        
        .divider:after {
            content: "";
            position: absolute;
            width: 60px;
            height: 3px;
            background-color: var(--primary);
            left: 50%;
            top: -1px;
            transform: translateX(-50%);
        }
        
        /* Footer */
        footer {
            background-color: var(--dark-text);
            color: white;
            padding: 40px 0;
            text-align: center;
            margin-top: 60px;
        }
        
        .footer-content {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .footer-logo {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
        }
        
        .footer-logo span {
            color: #ffd166;
        }
        
        .copyright {
            color: #94a3b8;
            font-size: 0.9rem;
            margin-top: 20px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.2rem;
            }
            
            .subtitle {
                font-size: 1rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .intro-section, .feature-card {
                padding: 25px;
            }
            
            .main-content {
                padding: 40px 0;
            }
            
            header {
                padding: 60px 0 40px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">Geek<span>ink</span></div>
            <h1>Transform Your Team with Enterprise Learning Solutions</h1>
            <p class="subtitle">Empower your organization with Geekink's comprehensive B2B learning platform. From custom LMS to offline learning solutions, we've got your team covered.</p>
        </div>
    </header>
    
    <div class="main-content">
        <div class="container">
            <div class="intro-section">
                <p>Our comprehensive learning solutions are designed to empower your workforce with the skills needed for the future. Whether you need a custom LMS, team training, or offline learning capabilities, we provide tailored solutions for your organization.</p>
            </div>
            
            <div class="features-grid">
                <!-- Enterprise LMS Card -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                    <h3>Enterprise LMS</h3>
                    <p>Custom learning management system for your organization</p>
                    <ul class="feature-list">
                        <li>White-label solution</li>
                        <li>Custom branding</li>
                        <li>Advanced analytics</li>
                        <li>Multi-tenant support</li>
                    </ul>
                </div>
                
                <!-- Custom Curriculum Card -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Custom Curriculum</h3>
                    <p>Tailored learning paths designed for your industry needs</p>
                    <ul class="feature-list">
                        <li>Industry-specific content</li>
                        <li>Skill assessments</li>
                        <li>Learning paths</li>
                        <li>Expert mentorship</li>
                    </ul>
                </div>
                
                <!-- Team Training Card -->
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Team Training</h3>
                    <p>Comprehensive tech training programs for your workforce</p>
                    <ul class="feature-list">
                        <li>Bulk enrollment</li>
                        <li>Progress tracking</li>
                        <li>Certification programs</li>
                        <li>Flexible scheduling</li>
                    </ul>
                </div>
                
                <!-- Offline Learning Card -->
                <div class="feature-card offline">
                    <div class="feature-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3>Offline Learning</h3>
                    <p>GeekBox ensures learning continues without internet</p>
                    <ul class="feature-list">
                        <li>Offline content delivery</li>
                        <li>Local network setup</li>
                        <li>Hardware included</li>
                        <li>Technical support</li>
                    </ul>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div style="text-align: center; max-width: 800px; margin: 0 auto;">
                <h2 style="margin-bottom: 20px; color: var(--primary-dark);">Why Choose Geekink?</h2>
                <p style="color: var(--light-text);">Our enterprise learning solutions combine cutting-edge technology with pedagogical expertise to deliver measurable results. We partner with organizations of all sizes to create scalable, effective learning environments that drive performance and growth.</p>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Geek<span>ink</span></div>
                <p>Empowering organizations with comprehensive B2B learning solutions</p>
                <p class="copyright">© 2023 Geekink. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Add subtle animation to feature cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const featureCards = document.querySelectorAll('.feature-card');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            featureCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
    </script>
</body>
</html>