        const canvas = document.getElementById("stars");
        const ctx = canvas.getContext("2d");
        let stars = [];
        let mouse = {
            x: 0,
            y: 0
        };

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        for (let i = 0; i < 250; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 2,
                o: Math.random()
            });
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let s of stars) {
                s.x += (mouse.x / 2000 - 0.1) * s.z;
                s.y += (mouse.y / 2000 - 0.1) * s.z;

                if (s.x < 0) s.x = canvas.width;
                if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height;
                if (s.y > canvas.height) s.y = 0;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.z, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.o})`;
                ctx.fill();
            }
            requestAnimationFrame(animateStars);
        }

        document.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX - window.innerWidth / 2;
            mouse.y = e.clientY - window.innerHeight / 2;
        });

        animateStars();

        const textList = [
            "Welcome to My Portfolio",
            "I'm a Student Developer",
            "Let's Explore Together!"
        ];
        let i = 0,
            j = 0,
            current = "",
            isDeleting = false;
        const typing = document.querySelector(".typing");

        function type() {
            current = textList[i];
            typing.textContent = current.substring(0, j);

            if (!isDeleting && j < current.length) {
                j++;
                setTimeout(type, 100);
            } else if (isDeleting && j > 0) {
                j--;
                setTimeout(type, 60);
            } else {
                if (!isDeleting) {
                    isDeleting = true;
                    setTimeout(type, 1200);
                } else {
                    isDeleting = false;
                    i = (i + 1) % textList.length;
                    setTimeout(type, 200);
                }
            }
        }
        type();

        const skillItems = document.querySelectorAll(".skill-item");

        function showSkillsOnScroll() {
            skillItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    item.classList.add("visible");
                }
            });
        }
        window.addEventListener("scroll", showSkillsOnScroll);
        showSkillsOnScroll();

        const skillsContainer = document.querySelector(".skills-container");
        let offset = 0;
        let direction = 1;

        function animateSkills() {
            offset += 0.2 * direction;
            if (offset > 30 || offset < -30) {
                direction *= -1; 
            }
            skillsContainer.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(animateSkills);
        }
        animateSkills();

