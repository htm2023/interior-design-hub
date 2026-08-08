const resources = {
  residential: {
    title: "مشاريع سكنية",
    description: "المخططات القياسية للمساحات الداخلية، غرف النوم، الصالونات والمطابخ.",
    sizeGuidelines: [
      "غرفة معيشة: 20-30 م²",
      "غرفة نوم رئيسية: 16-20 م²",
      "مطبخ مفتوح: 12-18 م²"
    ],
    popularPlans: [
      "مخططات شقق 3 غرف نوم",
      "فيلا بطابقين مع صالة مركزية",
      "تصميم داخلي فاخر للشقق الحديثة"
    ],
    recommendedTools: ["CADBlocks", "Archweb", "Polyhaven"]
  },
  commercial: {
    title: "مشاريع تجارية وإدارية",
    description: "خطط توزيع المكاتب، غرف الاجتماعات، والصالات التجارية الوظيفية.",
    sizeGuidelines: [
      "مكتب فردي: 8-12 م²",
      "قاعة اجتماعات: 20-30 م²",
      "مساحات استقبال: 15-25 م²"
    ],
    popularPlans: [
      "مخططات مكاتب مفتوحة",
      "تصميم معرض تجاري",
      "تنظيم مناطق استقبال الأعمال"
    ],
    recommendedTools: ["BIMsmith", "RevitCity", "CadMapper"]
  },
  hospitality: {
    title: "مشاريع الضيافة",
    description: "تصميم فنادق ومطاعم وكافيهات مع تركيز على تجربة الضيف.",
    sizeGuidelines: [
      "غرفة فندق قياسية: 18-25 م²",
      "مطعم متوسط: 120-180 م²",
      "كافيه مريح: 60-90 م²"
    ],
    popularPlans: [
      "تصميم ردهة استقبال فندقي",
      "مخططات مطاعم عصرية",
      "كافيه بطابع داخلي دافئ"
    ],
    recommendedTools: ["Dimensiva", "Polyhaven", "Behance"]
  },
  "health-cultural": {
    title: "مشاريع صحية وثقافية",
    description: "تخطيط المستشفيات والمتاحف والمراكز المعرضة مع الراحة والوظيفية.",
    sizeGuidelines: [
      "غرفة استراحة طبية: 12-18 م²",
      "قاعة عرض متحفي: 40-60 م²",
      "مساحات استقبال عامة: 25-35 م²"
    ],
    popularPlans: [
      "مخططات عيادات حديثة",
      "تصميم معرض تفاعلي",
      "مسار زوار متحف متكامل"
    ],
    recommendedTools: ["BIMsmith", "CadMapper", "ArchDaily"]
  }
};

const universities = {
  udhc: "جامعة أم درمان الأهلية - كلية التصميم الداخلي",
  uofk: "جامعة الخرطوم - كلية الهندسة (قسم المعمار)",
  sust: "جامعة السودان للعلوم والتكنولوجيا - كلية الفنون الجملية والتطبيقية (التصميم الداخلي)",
  other: ""
};

const resourceItems = [
  {
    title: "ArchDaily (Interiors)",
    description: "المرجع الأول للمخططات والتصوير المعماري الاحترافي في التصميم الداخلي.",
    url: "https://www.archdaily.com/",
    icon: "🌐",
    tags: ["#مخططات", "#صور_3D"],
    categories: ["residential", "commercial", "hospitality", "workspaces", "public", "moodboards"]
  },
  {
    title: "Dezeen (Interiors)",
    description: "اتجاهات التصميم الداخلي والأثاث الأحدث من العالم مع عروض إبداعية.",
    url: "https://www.dezeen.com/",
    icon: "📰",
    tags: ["#إلهام", "#اتجاهات"],
    categories: ["residential", "commercial", "hospitality", "workspaces", "public", "moodboards"]
  },
  {
    title: "Behance (Interior Design)",
    description: "استلهام مشاريع تخرج ممتازة وعروض لوحات التصميم من مصممين عالميين.",
    url: "https://www.behance.net/",
    icon: "🎨",
    tags: ["#Portfolio", "#Moodboard"],
    categories: ["residential", "commercial", "hospitality", "workspaces", "public", "moodboards"]
  },
  {
    title: "Pinterest",
    description: "إنشاء لوحات أفكار Moodboards والبحث عن التفاصيل والألوان والخامات.",
    url: "https://www.pinterest.com/",
    icon: "📌",
    tags: ["#Moodboard", "#تفاصيل"],
    categories: ["residential", "commercial", "hospitality", "workspaces", "public", "moodboards"]
  },
  {
    title: "Houzz",
    description: "أفكار تفصيلية للمنازل، المطابخ، الحمامات وتوزيع الأثاث.",
    url: "https://www.houzz.com/",
    icon: "🏠",
    tags: ["#سكني", "#أثاث"],
    categories: ["residential"]
  },
  {
    title: "Dwell",
    description: "تصميم المنازل المودرن والمعاصرة وتصاميم مبتكرة للمساحات الصغيرة.",
    url: "https://www.dwell.com/",
    icon: "🛋️",
    tags: ["#تصميم_حديث", "#مساحات_صغيرة"],
    categories: ["residential"]
  },
  {
    title: "Architectural Digest (AD)",
    description: "الفخامة والأنماط المعمارية السكنية الراقية وإلهام الديكور.",
    url: "https://www.architecturaldigest.com/",
    icon: "✨",
    tags: ["#فاخر", "#سكني"],
    categories: ["residential"]
  },
  {
    title: "Frame Web",
    description: "تصميم معارض البيع والتجزئة والبوثات الإبداعية بتجربة زبون محسنة.",
    url: "https://www.frameweb.com/",
    icon: "🏬",
    tags: ["#تجزئة", "#عرض"],
    categories: ["commercial"]
  },
  {
    title: "Retail Design Blog",
    description: "تغطية تصاميم المتاجر وهوية العلامة وتوزيع حركة الزبائن.",
    url: "https://retaildesignblog.net/",
    icon: "🛍️",
    tags: ["#متاجر", "#هوية"],
    categories: ["commercial"]
  },
  {
    title: "Hospitality Design (HD)",
    description: "مصمم للفنادق والمنتجعات واللواتج الفاخرة وتجارب الضيافة.",
    url: "https://www.hospitalitydesign.com/",
    icon: "🏨",
    tags: ["#ضيافة", "#فندق"],
    categories: ["hospitality"]
  },
  {
    title: "Yellowtrace",
    description: "إلهام مبتكر للمطاعم والكافيهات والحانات بتصاميم غير تقليدية.",
    url: "https://www.yellowtrace.com.au/",
    icon: "☕",
    tags: ["#مطاعم", "#كافيه"],
    categories: ["hospitality"]
  },
  {
    title: "Office Snapshots",
    description: "استعراض مقرات الشركات العالمية وتوزيع المكاتب المفتوحة وبيئات العمل.",
    url: "https://officesnapshots.com/",
    icon: "💼",
    tags: ["#مكاتب", "#بيئة_عمل"],
    categories: ["workspaces"]
  },
  {
    title: "Material Bank",
    description: "اكتشف أحدث الخامات المستدامة وتنسيقات الألوان في التصميم الداخلي.",
    url: "https://www.materialbank.com/",
    icon: "🧱",
    tags: ["#خامات", "#تناسق_ألوان"],
    categories: ["moodboards"]
  },
  {
    title: "Design Milk",
    description: "اتجاهات الأثاث الحديث والإضاءة والمنتجات الداخلية الملهمة.",
    url: "https://design-milk.com/",
    icon: "🖼️",
    tags: ["#إضاءة", "#منتجات"],
    categories: ["moodboards"]
  }
];

const projectTypeSelect = document.getElementById("projectType");
const guideResult = document.getElementById("guideResult");
const universitySelect = document.getElementById("universitySelect");
const customUniversityPanel = document.getElementById("customUniversityPanel");
const customUniversityInput = document.getElementById("customUniversityInput");
const siteBannerText = document.getElementById("siteBannerText");
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const projectTitleBlock = document.getElementById("projectTitleBlock");
const studentNameInput = document.getElementById("studentName");
const projectNameInput = document.getElementById("projectName");
const supervisorInput = document.getElementById("supervisor");
const interactiveTitle = document.getElementById("interactiveTitle");
const resourcesGrid = document.getElementById("resourcesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const resourceSearch = document.getElementById("resourceSearch");
// Local guide elements
const localTabs = document.querySelectorAll(".local-tab");
const localSearch = document.getElementById("localSearch");
const localCards = document.getElementById("localCards");

const localGuideItems = [
  // Materials
  {
    id: 1,
    category: "materials",
    title: "أخشاب محلية (ساج، بن",
    description: "أنواع الأخشاب المتاحة محلياً واستخداماتها في النجارة والتشطيب.",
    tags: ["أخشاب", "تشطيب"],
    link: ""
  },
  {
    id: 2,
    category: "materials",
    title: "رخام محلي واستيراد بدائل",
    description: "مصادر الرخام المحلي وأنواعه وطرق التشطيب المتبعة في السودان.",
    tags: ["رخام", "مواد"],
    link: ""
  },
  {
    id: 3,
    category: "materials",
    title: "طوب مفرغ ومواصفاته",
    description: "مزايا الطوب المفرغ وكيفية دمجه في التصميم الداخلي والأثاث القائم على الحوائط.",
    tags: ["طوب", "بناء"],
    link: ""
  },
  // Markets
  {
    id: 11,
    category: "markets",
    title: "سوق السجانة",
    description: "مركز لتوريد الخامات والمواد التقليدية في الخرطوم.",
    tags: ["أسواق", "خرطوم"],
    link: ""
  },
  {
    id: 12,
    category: "markets",
    title: "ورش النجارة والكريتال",
    description: "قائمة بورش النجارة المتخصصة وتصنيع الكريتال في المناطق الحضرية.",
    tags: ["ورش", "نجارة"],
    link: ""
  },
  // Identity
  {
    id: 21,
    category: "identity",
    title: "التهوية والحوش التقليدي",
    description: "نصائح لتهوية المباني ودمج الساحات الداخلية (الحوش) لتحسين المناخ الداخلي.",
    tags: ["تهوية", "مناخ"],
    link: ""
  },
  {
    id: 22,
    category: "identity",
    title: "ألوان ترابية ومحلية",
    description: "لوحات ألوان مستلهمة من التراث السوداني والمواد المحلية.",
    tags: ["ألوان", "تراث"],
    link: ""
  },
  {
    id: 23,
    category: "identity",
    title: "دمج التراث في الأثاث المودرن",
    description: "أمثلة على استخدام عناصر تراثية مع خطوط أثاث حديثة.",
    tags: ["تراث", "أثاث"],
    link: ""
  }
];

function renderLocalCards(items) {
  if (!items.length) {
    localCards.innerHTML = `
      <div class="no-local-results">
        <h4>لا توجد نتائج</h4>
        <p>لم يتم العثور على مدخلات تطابق البحث. جرب كلمة مفتاحية أخرى أو تغيير التبويب.</p>
      </div>
    `;
    return;
  }

  localCards.innerHTML = items.map((it) => `
    <article class="local-card">
      <h4>${it.title}</h4>
      <p>${it.description}</p>
      ${it.link ? `<a href="${it.link}" target="_blank" rel="noreferrer">تفاصيل ↗</a>` : ""}
    </article>
  `).join("");
}

function filterLocal() {
  const activeTab = document.querySelector('.local-tab.active').dataset.tab;
  const q = localSearch.value.trim().toLowerCase();
  const filtered = localGuideItems.filter((it) => {
    const inCategory = activeTab === 'all' ? true : it.category === activeTab;
    const matches = [it.title, it.description, ...it.tags].some(f => f.toLowerCase().includes(q));
    return inCategory && matches;
  });
  renderLocalCards(filtered);
}

// attach local tabs
localTabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    localTabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterLocal();
  });
});

if (localSearch) localSearch.addEventListener('input', filterLocal);

// initialize local guide view
renderLocalCards(localGuideItems.filter(i => i.category === 'materials'));
const shareLinkBtn = document.getElementById("shareLinkBtn");
const toastMessage = document.getElementById("toastMessage");

function getSelectedUniversity() {
  const value = universitySelect.value;
  return value === "other" ? (customUniversityInput.value.trim() || "جامعة أخرى - كلية التصميم الداخلي") : universities[value];
}

function updateBranding() {
  const universityLabel = getSelectedUniversity();
  siteBannerText.textContent = universityLabel;
  heroEyebrow.textContent = `منصة ${universityLabel}`;
  heroTitle.textContent = `دليلك الشامل لإنجاز مشروع التخرج في ${universityLabel}`;
  interactiveTitle.textContent = `اختر نوع المشروع واحصل على دليل مخصص لـ ${universityLabel}`;
  updateProjectTitleBlock();
}

function renderGuide(typeKey) {
  const resource = resources[typeKey];
  guideResult.innerHTML = `
    <h3>${resource.title}</h3>
    <p>${resource.description}</p>
    <ul>
      <li><strong>أبعاد قياسية:</strong> ${resource.sizeGuidelines.join("، ")}</li>
      <li><strong>المخططات الأكثر طلبًا:</strong> ${resource.popularPlans.join("، ")}</li>
      <li><strong>مصادر مقترحة:</strong> ${resource.recommendedTools.join("، ")}</li>
    </ul>
  `;
}

function updateProjectTitleBlock() {
  const universityLabel = getSelectedUniversity();
  const studentName = studentNameInput.value.trim() || "[اسم الطالب]";
  const projectName = projectNameInput.value.trim() || "[اسم المشروع]";
  const supervisorName = supervisorInput.value.trim() || "[اسم المشرف]";

  projectTitleBlock.textContent = `${universityLabel}\r\nاسم الطالب: ${studentName}\r\nاسم المشروع: ${projectName}\r\nالمشرف: ${supervisorName}`;
}

function showToast(message) {
  toastMessage.textContent = message;
  toastMessage.classList.add("visible");
  clearTimeout(showToast.hideTimeout);
  showToast.hideTimeout = setTimeout(() => {
    toastMessage.classList.remove("visible");
  }, 2400);
}

function copyShareLink() {
  const currentUrl = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "رابط دليل المصمم الداخلي",
      url: currentUrl
    }).catch(() => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        showToast("تم نسخ الرابط إلى الحافظة!");
      }).catch(() => {
        showToast("فشل نسخ الرابط، حاول مرة أخرى.");
      });
    });
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentUrl).then(() => {
      showToast("تم نسخ الرابط إلى الحافظة!");
    }).catch(() => {
      showToast("فشل نسخ الرابط، حاول مرة أخرى.");
    });
    return;
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = currentUrl;
  tempInput.style.position = "fixed";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    document.execCommand("copy");
    showToast("تم نسخ الرابط إلى الحافظة!");
  } catch {
    showToast("فشل نسخ الرابط، حاول مرة أخرى.");
  }

  document.body.removeChild(tempInput);
}

function onUniversityChange() {
  if (universitySelect.value === "other") {
    customUniversityPanel.style.display = "grid";
  } else {
    customUniversityPanel.style.display = "none";
  }
  updateBranding();
}

function renderResourceCards(items) {
  if (!items.length) {
    resourcesGrid.innerHTML = `
      <div class="no-results">
        <h3>لا توجد نتائج</h3>
        <p>لم يتم العثور على مواقع تطابق البحث الحالي. جرب كلمة مفتاحية أخرى أو اختر فئة أوسع.</p>
      </div>
    `;
    return;
  }

  const html = items.map((item) => `
    <article class="resource-card">
      <div class="resource-card-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="resource-tags">
        ${item.tags.map((tag) => `<span class="resource-tag">${tag}</span>`).join("")}
      </div>
      <a class="resource-card-link" href="${item.url}" target="_blank" rel="noreferrer">زيارة الموقع ↗</a>
    </article>
  `).join("");

  resourcesGrid.innerHTML = html;
}

function filterResources() {
  const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
  const query = resourceSearch.value.trim().toLowerCase();
  const filtered = resourceItems.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.categories.includes(activeFilter);
    const matchesSearch = [item.title, item.description, ...item.tags].some((field) => field.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  resourcesGrid.classList.add("fade-out");
  setTimeout(() => {
    renderResourceCards(filtered);
    resourcesGrid.classList.remove("fade-out");
  }, 180);
}

function clearActiveFilter() {
  filterButtons.forEach((button) => button.classList.remove("active"));
}

projectTypeSelect.addEventListener("change", (event) => {
  renderGuide(event.target.value);
});

universitySelect.addEventListener("change", onUniversityChange);
customUniversityInput.addEventListener("input", onUniversityChange);
studentNameInput.addEventListener("input", updateProjectTitleBlock);
projectNameInput.addEventListener("input", updateProjectTitleBlock);
supervisorInput.addEventListener("input", updateProjectTitleBlock);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearActiveFilter();
    button.classList.add("active");
    filterResources();
  });
});

resourceSearch.addEventListener("input", filterResources);
shareLinkBtn.addEventListener("click", copyShareLink);

renderGuide(projectTypeSelect.value);
updateBranding();
renderResourceCards(resourceItems);
