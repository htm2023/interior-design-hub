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
    title: "أخشاب محلية (ساج، بن)",
    description: "أنواع الأخشاب المتاحة محلياً واستخداماتها في النجارة والتشطيب.",
    tags: ["أخشاب", "تشطيب"],
    link: "local-details/1.html"
  },
  {
    id: 2,
    category: "materials",
    title: "رخام محلي واستيراد بدائل",
    description: "مصادر الرخام المحلي وأنواعه وطرق التشطيب المتبعة في السودان.",
    tags: ["رخام", "مواد"],
    link: "local-details/2.html"
  },
  {
    id: 3,
    category: "materials",
    title: "طوب مفرغ ومواصفاته",
    description: "مزايا الطوب المفرغ وكيفية دمجه في التصميم الداخلي والأثاث القائم على الحوائط.",
    tags: ["طوب", "بناء"],
    link: "local-details/3.html"
  },
  // Markets
  {
    id: 11,
    category: "markets",
    title: "سوق السجانة",
    description: "مركز لتوريد الخامات والمواد التقليدية في الخرطوم.",
    tags: ["أسواق", "خرطوم"],
    link: "local-details/11.html"
  },
  {
    id: 12,
    category: "markets",
    title: "ورش النجارة والكريتال",
    description: "قائمة بورش النجارة المتخصصة وتصنيع الكريتال في المناطق الحضرية.",
    tags: ["ورش", "نجارة"],
    link: "local-details/12.html"
  },
  // Identity
  {
    id: 21,
    category: "identity",
    title: "التهوية والحوش التقليدي",
    description: "نصائح لتهوية المباني ودمج الساحات الداخلية (الحوش) لتحسين المناخ الداخلي.",
    tags: ["تهوية", "مناخ"],
    link: "local-details/21.html"
  },
  {
    id: 22,
    category: "identity",
    title: "ألوان ترابية ومحلية",
    description: "لوحات ألوان مستلهمة من التراث السوداني والمواد المحلية.",
    tags: ["ألوان", "تراث"],
    link: "local-details/22.html"
  },
  {
    id: 23,
    category: "identity",
    title: "دمج التراث في الأثاث المودرن",
    description: "أمثلة على استخدام عناصر تراثية مع خطوط أثاث حديثة.",
    tags: ["تراث", "أثاث"],
    link: "local-details/23.html"
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

/* Site Selection & Analysis Tool JS */
const siteTabs = document.querySelectorAll('.site-tab');
const siteSuggestionsPanel = document.getElementById('siteSuggestions');
const siteMatrixPanel = document.getElementById('siteMatrix');
const siteProjectTypeSelect = document.getElementById('siteProjectTypeSelect');
const suggestedSitesEl = document.getElementById('suggestedSites');
const computeSiteScoreBtn = document.getElementById('computeSiteScore');
const siteScoreResult = document.getElementById('siteScoreResult');

const suggestedSites = {
  residential: [
    { title: 'الخرطوم المقرن', coords: [15.590,32.510], reason: 'شبكة خدمات جيدة ومجتمعات سكنية قريبة.' },
    { title: 'أم درمان - حي العرب', coords: [15.650,32.470], reason: 'تراثي مع فرص دمج الحوش والفراغات.' }
  ],
  commercial: [
    { title: 'شارع النيل', coords: [15.588,32.534], reason: 'محور تجاري واضح مع انسيابية مرور.' },
    { title: 'الخرطوم المقرن', coords: [15.590,32.510], reason: 'موقع مركزي وقابلية للتحول التجاري.' }
  ],
  hospitality: [
    { title: 'بورتسودان - المورينق', coords: [19.613,37.216], reason: 'واجهة بحرية وتجربة ضيافة سياحية.' }
  ],
  'health-cultural': [
    { title: 'حي المعارض (الخرطوم)', coords: [15.590,32.520], reason: 'قرب من البنية التحتية الثقافية والصحية.' }
  ]
};

function renderSuggestedSites(type) {
  const list = suggestedSites[type] || [];
  if (!list.length) {
    suggestedSitesEl.innerHTML = '<div class="no-local-results">لا توجد مواقع مقترحة لهذه الفئة.</div>';
    return;
  }
  suggestedSitesEl.innerHTML = list.map(s => `
    <div class="suggested-card">
      <h4>${s.title}</h4>
      <p>${s.reason}</p>
      <div class="suggested-actions">
        <button class="btn btn-secondary" data-lat="${s.coords[0]}" data-lon="${s.coords[1]}">عرض على الخريطة</button>
        <a class="btn btn-primary" href="/local-details/" target="_blank" rel="noreferrer">تفاصيل الموقع</a>
      </div>
    </div>
  `).join('');

  // attach map buttons
  suggestedSitesEl.querySelectorAll('.btn').forEach(btn => {
    if (btn.dataset.lat) {
      btn.addEventListener('click', () => {
        const lat = parseFloat(btn.dataset.lat);
        const lon = parseFloat(btn.dataset.lon);
        if (window.siteMap) {
          window.siteMap.setView([lat, lon], 15);
          L.marker([lat,lon]).addTo(window.siteMap).bindPopup(`${lat.toFixed(5)}, ${lon.toFixed(5)}`).openPopup();
        }
      });
    }
  });
}

// tabs
siteTabs.forEach(tab => tab.addEventListener('click', () => {
  siteTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const mode = tab.dataset.mode;
  if (mode === 'suggestions') { siteSuggestionsPanel.style.display = ''; siteMatrixPanel.style.display = 'none'; }
  else { siteSuggestionsPanel.style.display = 'none'; siteMatrixPanel.style.display = ''; }
}));

siteProjectTypeSelect.addEventListener('change', () => renderSuggestedSites(siteProjectTypeSelect.value));
renderSuggestedSites(siteProjectTypeSelect.value);

// Site matrix score
computeSiteScoreBtn.addEventListener('click', () => {
  const form = document.getElementById('siteMatrixForm');
  const vals = Array.from(form.querySelectorAll('.matrix-select')).map(s => parseInt(s.value,10));
  const total = vals.reduce((a,b) => a+b, 0);
  const percent = Math.round((total / (vals.length*5)) * 100);
  let advice = '';
  if (percent >= 85) advice = 'موقع ممتاز — مناسب للمشروع مع تأثيرات قليلة.';
  else if (percent >= 65) advice = 'مناسب مع بعض المعالجات المعمارية (تهوية/عزل/تظليل).';
  else if (percent >= 40) advice = 'قابل للتطوير لكنه يحتاج تحسينات في الخدمات أو التكييف.';
  else advice = 'غير مناسب دون تدخلات كبيرة أو اختيار موقع بديل.';
  siteScoreResult.innerHTML = `<strong>نسبة الملاءمة: ${percent}%</strong><p>${advice}</p>`;
});

// Leaflet map init
function initSiteMap() {
  try {
    const map = L.map('siteMap').setView([15.6,32.53], 11);
    window.siteMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
    map.on('click', function(e) {
      const lat = e.latlng.lat.toFixed(6);
      const lon = e.latlng.lng.toFixed(6);
      const cadUrl = `https://cadmapper.com/?lat=${lat}&lon=${lon}`;
      const sunUrl = `https://www.suncalc.org/#/${lat},${lon}`;
      const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(`<div style="min-width:180px"><strong>إحداثيات:</strong><div>${lat}, ${lon}</div><div style="margin-top:8px"><a href="${cadUrl}" target="_blank" rel="noreferrer" class="btn btn-secondary">تحميل مخطط CAD عبر CadMapper ↗</a> <a href="${sunUrl}" target="_blank" rel="noreferrer" class="btn btn-secondary">تحليل مسار الشمس عبر SunCalc ↗</a></div></div>`)
        .openOn(map);
    });
  } catch (err) {
    console.error('Leaflet init error', err);
  }
}

// initialize map after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof L !== 'undefined') initSiteMap();
  else console.warn('Leaflet not loaded');
});
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
