var menu = document.querySelector(".header__menu");
const list = document.querySelector(".list");
var menuIcon = document.querySelector(".menu-icon");
var closeIcon = document.querySelector(".menu-close");
menu.addEventListener("click", () => {
	list.classList.toggle("show");

	if (list.classList.contains("show")) {
		menuIcon.style.display = "none";
		closeIcon.style.display = "inline-block";
	} else {
		menuIcon.style.display = "inline-block";
		closeIcon.style.display = "none";
	}
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".item-link");

window.onscroll = () => {
	sections.forEach((section) => {
		let top = window.scrollY;
		let offset = section.offsetTop;
		let height = section.offsetHeight;

		if (top < 100) {
			navItems.forEach((nav) => {
				nav.classList.remove("active");
			});

			document
				.querySelector("header nav a[href*=overview]")
				.classList.add("active");
			return;
		}

		if (top > 7100) {
			navItems.forEach((nav) => {
				nav.classList.remove("active");
			});

			document
				.querySelector("header nav a[href*=contact]")
				.classList.add("active");
			return;
		}

		let id = section.getAttribute("id");
		if (top + 100 >= offset && top < offset + height) {
			navItems.forEach((nav) => {
				nav.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
		// Đặt khoảng cách từ đầu trang mà tại đó sẽ xóa active
		const deactivateThreshold = 0; // Ví dụ: 50px

		// Kiểm tra nếu vị trí cuộn nhỏ hơn ngưỡng, xóa lớp active
		if (top <= deactivateThreshold) {
			navItems.forEach((nav) => {
				nav.classList.remove("active");
			});
		}
	});
};
