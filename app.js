const data = {
 morning:{title:"أذكار الصباح",items:[
 ["أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.","مرة واحدة"],
 ["اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.","مرة واحدة"],
 ["سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.","100 مرة"],
 ["رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.","3 مرات"],
 ["اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.","مرة واحدة"]
 ]},
 evening:{title:"أذكار المساء",items:[
 ["أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.","مرة واحدة"],
 ["اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.","مرة واحدة"],
 ["سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.","100 مرة"],
 ["أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.","3 مرات"],
 ["رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.","3 مرات"]
 ]},
 sleep:{title:"أذكار النوم",items:[
 ["بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.","مرة واحدة"],
 ["اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.","3 مرات"],
 ["سُبْحَانَ اللَّهِ.","33 مرة"],
 ["الْحَمْدُ لِلَّهِ.","33 مرة"],
 ["اللَّهُ أَكْبَرُ.","34 مرة"]
 ]},
 wake:{title:"أذكار الاستيقاظ",items:[
 ["الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.","مرة واحدة"],
 ["الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.","مرة واحدة"]
 ]},
 prayer:{title:"أذكار بعد الصلاة",items:[
 ["أَسْتَغْفِرُ اللَّهَ.","3 مرات"],
 ["اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.","مرة واحدة"],
 ["سُبْحَانَ اللَّهِ.","33 مرة"],
 ["الْحَمْدُ لِلَّهِ.","33 مرة"],
 ["اللَّهُ أَكْبَرُ.","33 مرة"],
 ["لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.","مرة واحدة"]
 ]},
 daily:{title:"الورد اليومي",items:[
 ["أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.","100 مرة"],
 ["اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.","ما تيسر"],
 ["سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.","100 مرة"],
 ["لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.","ما تيسر"],
 ["لَا إِلَهَ إِلَّا اللَّهُ.","ما تيسر"]
 ]},
 misc:{title:"أذكار متنوعة",items:[
 ["بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.","عند الخروج من المنزل"],
 ["اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ.","عند دخول المنزل"],
 ["بِسْمِ اللَّهِ.","قبل الطعام"],
 ["الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.","بعد الطعام"],
 ["سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ.","عند ركوب وسيلة السفر"]
 ]}
};
const $=s=>document.querySelector(s);
const panel=$("#contentPanel"), tasPanel=$("#tasbeehPanel");
let current="", tasCount=Number(localStorage.getItem("tasCount")||0), tasIndex=0;
const tasTexts=["سُبْحَانَ اللَّهِ","الْحَمْدُ لِلَّهِ","اللَّهُ أَكْبَرُ","لَا إِلَهَ إِلَّا اللَّهُ","أَسْتَغْفِرُ اللَّهَ"];
function getDone(){return JSON.parse(localStorage.getItem("azkarDone")||"{}")}
function saveDone(v){localStorage.setItem("azkarDone",JSON.stringify(v));updateProgress()}
function updateProgress(){const d=getDone();let n=0;Object.values(d).forEach(x=>{n+=Object.values(x).filter(Boolean).length});const total=5;$("#dailyProgress").textContent=Math.min(n,total)+" من "+total+" أذكار مكتملة";$("#dailyBar").style.width=Math.min(n/total*100,100)+"%"}
function openSection(key){document.getElementById("audioLibraryPanel")?.setAttribute("hidden","");resourcePanel.hidden=true; if(typeof quranPanel!=="undefined")quranPanel.hidden=true; if(typeof prayerPanel!=="undefined")prayerPanel.hidden=true; current=key;const section=data[key];$("#panelTitle").textContent=section.title;$("#sectionCount").textContent=section.items.length+" أذكار";const done=getDone();$("#dhikrList").innerHTML=section.items.map((item,i)=>{let isDone=!!(done[key]&&done[key][i]);return `<article class="dhikr-card"><p class="dhikr-text">${item[0]}</p><div class="dhikr-bottom"><span class="dhikr-note">${item[1]}</span><div class="dhikr-actions"><span class="repeat-count">${isDone?"تم الإنجاز":"اقرأ بتدبّر"}</span><button class="complete-btn ${isDone?"done":""}" data-index="${i}">${isDone?"✓ مكتمل":"تم الذكر"}</button></div></div></article>`}).join("");$("#categoryGrid").hidden=true;$(".daily-strip").hidden=true;$(".section-heading").hidden=true;panel.hidden=false;tasPanel.hidden=true;window.scrollTo({top:panel.offsetTop-15,behavior:"smooth"});}
$("#dhikrList").addEventListener("click",e=>{const b=e.target.closest("button[data-index]");if(!b)return;const i=b.dataset.index,d=getDone();d[current]??={};d[current][i]=!d[current][i];saveDone(d);openSection(current)});
function home(){document.getElementById("audioLibraryPanel")?.setAttribute("hidden","");panel.hidden=true;tasPanel.hidden=true;resourcePanel.hidden=true; if(typeof quranPanel!=="undefined")quranPanel.hidden=true; if(typeof prayerPanel!=="undefined")prayerPanel.hidden=true;$("#categoryGrid").hidden=false;$(".daily-strip").hidden=false;$(".section-heading").hidden=false;window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>b.dataset.open==="tasbeeh"?openTasbeeh():openSection(b.dataset.open)));

// صفحات المصادر الشرعية: تُعرض الروابط من المواقع الرسمية بدل نسخ محتوى غير موثق.
const resourcePanel=$("#resourcePanel");
const hadithLibrary=[
 {category:"الإيمان والعمل",text:"إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.",narrator:"عمر بن الخطاب رضي الله عنه",source:"صحيح البخاري، حديث 1؛ وصحيح مسلم، حديث 1907",grade:"صحيح",note:"يبين الحديث أن قيمة العمل وثوابه مرتبطان بالنية والقصد."},
 {category:"الأخلاق",text:"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",narrator:"أنس بن مالك رضي الله عنه",source:"صحيح البخاري، حديث 13؛ وصحيح مسلم، حديث 45",grade:"صحيح",note:"يدعو الحديث إلى محبة الخير للناس كما يحبه الإنسان لنفسه."},
 {category:"الذكر",text:"كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم.",narrator:"أبو هريرة رضي الله عنه",source:"صحيح البخاري، حديث 6406؛ وصحيح مسلم، حديث 2694",grade:"صحيح",note:"فيه فضل هذين الذكرين وعظيم أجرهما."},
 {category:"الآخرة",text:"يتبع الميتَ ثلاثةٌ، فيرجع اثنان ويبقى واحد؛ يتبعه أهله وماله وعمله، فيرجع أهله وماله ويبقى عمله.",narrator:"أنس بن مالك رضي الله عنه",source:"صحيح البخاري، حديث 6514؛ وصحيح مسلم، حديث 2960",grade:"صحيح",note:"يذكّر الحديث بأن العمل الصالح هو ما يبقى للإنسان بعد رحيله."},
 {category:"الرحمة",text:"من لا يَرحم لا يُرحم.",narrator:"جرير بن عبد الله رضي الله عنه",source:"صحيح البخاري، حديث 6013؛ وصحيح مسلم، حديث 2319",grade:"صحيح",note:"الحث على الرحمة بالخلق، وأن الجزاء من جنس العمل."},
 {category:"طلب العلم",text:"من سلك طريقًا يلتمس فيه علمًا، سهّل الله له به طريقًا إلى الجنة.",narrator:"أبو هريرة رضي الله عنه",source:"صحيح مسلم، حديث 2699",grade:"صحيح",note:"فضل طلب العلم النافع والسعي إليه."},
 {category:"الطهارة",text:"الطُّهُورُ شَطْرُ الإِيمَانِ.",narrator:"أبو مالك الأشعري رضي الله عنه",source:"صحيح مسلم، حديث 223",grade:"صحيح",note:"يبين عظم شأن الطهارة في الإسلام."}
];
const akhirahTopics=[
 {title:"البعث والنشور",ref:"إبراهيم: 48؛ يس: 51–52",body:"يؤمن المسلم بأن الله يبعث الخلق بعد الموت ليوم القيامة، فيقوم الناس لرب العالمين. تذكّر هذه الحقيقة بالاستعداد بالطاعة والعمل الصالح."},
 {title:"الحشر",ref:"الكهف: 47–49",body:"يجمع الله الخلائق يوم القيامة، فلا يغيب عنه أحد، ويُعرض الناس على ربهم وتظهر حقيقة الأعمال."},
 {title:"الحساب والكتاب",ref:"الحاقة: 18–24؛ الإسراء: 13–14",body:"يُعرض عمل الإنسان ويُعطى كتابه، ويحاسَب على ما قدّم. وفي ذلك دعوة لمراجعة النفس ورد الحقوق."},
 {title:"الميزان",ref:"الأنبياء: 47؛ القارعة: 6–9",body:"تُوزن الأعمال بالقسط يوم القيامة، ولا يُظلم أحد شيئًا. ويحث هذا على الإخلاص والإكثار من الخير."},
 {title:"الصراط",ref:"مريم: 71–72",body:"وردت أحاديث صحيحة في المرور على الصراط، وتفاصيله من أمور الغيب التي نؤمن بها كما جاءت، من غير تكلف أو تخمين."},
 {title:"الجنة",ref:"آل عمران: 133؛ السجدة: 17",body:"أعد الله لعباده المتقين دار كرامة ونعيمًا لا تعلم نفس تفاصيله على الحقيقة. ومن أسباب الفوز بها الإيمان والعمل الصالح ورحمة الله."},
 {title:"النار والنجاة منها",ref:"آل عمران: 131؛ التحريم: 6",body:"تحذر النصوص من أسباب العذاب، وتفتح باب التوبة والرجوع إلى الله، مع عدم القنوط من رحمته."}
];
const resourcePages={
 dorarQuran:{title:"مصحف القرآن والتفسير",html:`<div class="resource-card"><h3>المصحف الشريف</h3><p>اقرأ القرآن كاملًا من قسم «القرآن الكريم» داخل التطبيق، واختر السورة والقارئ، واعرض التفسير الميسر للآيات. تُحفظ السور التي تفتحها على جهازك لتسهيل الرجوع إليها عند انقطاع الاتصال.</p><button class="primary-btn" data-jump-quran>افتح المصحف الآن</button></div><div class="resource-card"><h3>حول مصادر النصوص</h3><p>نص القرآن يُعرض من خدمة القرآن الرقمية، والتلاوات من فهرس MP3Quran. أسماء المصادر ظاهرة داخل التطبيق، ولا ندّعي أن ملف PDF المرفق صادر عن الدرر السنية.</p><p class="muted-note">قد يلزم الاتصال بالإنترنت أول مرة لجلب السور والتفاسير والتلاوات، ثم تُحفظ البيانات التي تم فتحها محليًا.</p></div>`},
 akhirah:{title:"أهوال الآخرة",html:`<div class="resource-intro">موضوعات موجزة للتذكير والتدبر، مع إحالات إلى مواضع قرآنية. الشروح هنا صياغة تعليمية مختصرة وليست نقلًا حرفيًا عن كتاب تفسير.</div><div class="topic-grid">${akhirahTopics.map((x,i)=>`<article class="resource-card"><span class="topic-number">${String(i+1).padStart(2,"0")}</span><h3>${x.title}</h3><p>${x.body}</p><small><b>مواضع للاستشهاد:</b> ${x.ref}</small></article>`).join("")}</div><div class="resource-card"><h3>أحاديث متعلقة بالآخرة</h3><p>يمكنك تصفية مكتبة الأحاديث في قسم الأحاديث النبوية بحسب تصنيف «الآخرة».</p><button class="primary-btn" data-jump-hadith>عرض الأحاديث</button></div>`},
 hadith:{title:"الأحاديث النبوية الشريفة",html:`<div class="resource-intro">مجموعة مختارة من الأحاديث الصحيحة مع الراوي والمصدر وشرح موجز. استخدم البحث لتصفية النصوص أو موضوع الحديث.</div><label class="hadith-search">ابحث في الأحاديث<input id="hadithSearch" type="search" placeholder="اكتب كلمة أو اسم الراوي أو الموضوع"></label><div class="hadith-filters"><button class="filter-chip active" data-hadith-filter="الكل">الكل</button>${[...new Set(hadithLibrary.map(h=>h.category))].map(c=>`<button class="filter-chip" data-hadith-filter="${c}">${c}</button>`).join("")}</div><div id="hadithList" class="hadith-list">${renderHadithCards(hadithLibrary)}</div><p class="muted-note">التخريج المذكور يحدد موضع الحديث في كتب السنة. راجع الطبعة المعتمدة عند الاقتباس أو النشر العلمي.</p>`}
};
function renderHadithCards(list){return list.length?list.map(h=>`<article class="resource-card hadith-card"><span class="hadith-category">${h.category}</span><p class="hadith-text">«${h.text}»</p><div class="hadith-meta"><span><b>الراوي:</b> ${h.narrator}</span><span><b>الحكم:</b> ${h.grade}</span></div><p class="hadith-source"><b>المصدر:</b> ${h.source}</p><p>${h.note}</p></article>`).join(""):`<p class="muted-note">لا توجد نتائج مطابقة.</p>`}
let activeHadithFilter="الكل";
function initHadithFilters(){const search=document.getElementById("hadithSearch");if(!search)return;const render=()=>{const q=search.value.trim().toLowerCase();const list=hadithLibrary.filter(h=>(activeHadithFilter==="الكل"||h.category===activeHadithFilter)&&[h.text,h.narrator,h.source,h.category].join(" ").toLowerCase().includes(q));document.getElementById("hadithList").innerHTML=renderHadithCards(list)};search.addEventListener("input",render);document.querySelectorAll("[data-hadith-filter]").forEach(b=>b.addEventListener("click",()=>{activeHadithFilter=b.dataset.hadithFilter;document.querySelectorAll("[data-hadith-filter]").forEach(x=>x.classList.toggle("active",x===b));render()}));}

function openResource(key){const item=resourcePages[key];if(!item)return;panel.hidden=true;tasPanel.hidden=true;quranPanel.hidden=true;prayerPanel.hidden=true;resourcePanel.hidden=false;$("#categoryGrid").hidden=true;$(".daily-strip").hidden=true;$(".section-heading").hidden=true;$("#resourceTitle").textContent=item.title;$("#resourceContent").innerHTML=item.html;if(key==="hadith")initHadithFilters();resourcePanel.querySelector("[data-jump-quran]")?.addEventListener("click",quranShow);resourcePanel.querySelector("[data-jump-hadith]")?.addEventListener("click",()=>openResource("hadith"));window.scrollTo({top:resourcePanel.offsetTop-12,behavior:"smooth"})}
document.querySelectorAll('[data-open="dorarQuran"],[data-open="akhirah"],[data-open="hadith"]').forEach(b=>b.addEventListener("click",()=>openResource(b.dataset.open)));
resourcePanel.querySelector(".resource-back").onclick=()=>{resourcePanel.hidden=true;home()};

$("#backBtn").onclick=home;$("#tasbeehBack").onclick=home;
function openTasbeeh(){panel.hidden=true;$("#categoryGrid").hidden=true;$(".daily-strip").hidden=true;$(".section-heading").hidden=true;tasPanel.hidden=false;updateTas();window.scrollTo({top:tasPanel.offsetTop-15,behavior:"smooth"})}
function updateTas(){$("#tasbeehNumber").textContent=tasCount;$("#tasbeehText").textContent=tasTexts[tasIndex]}
$("#tasbeehTap").onclick=()=>{tasCount++;localStorage.setItem("tasCount",tasCount);updateTas()};
$("#tasbeehReset").onclick=()=>{tasCount=0;localStorage.setItem("tasCount",0);updateTas()};
$("#tasbeehNext").onclick=()=>{tasIndex=(tasIndex+1)%tasTexts.length;tasCount=0;localStorage.setItem("tasCount",0);updateTas()};
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("azkarTheme",document.body.classList.contains("dark")?"dark":"light")};
if(localStorage.getItem("azkarTheme")==="dark")document.body.classList.add("dark");
const now=new Date();$("#todayDate").textContent=new Intl.DateTimeFormat("ar-EG",{weekday:"long",day:"numeric",month:"long"}).format(now);updateProgress();
let deferredPrompt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt=null;$("#installBtn").hidden=true};
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});


// القرآن الكريم: النص من AlQuran Cloud، وقائمة القراء وملفات الصوت من MP3Quran.
const quranPanel=$("#quranPanel");
let quranSurahs=[], quranReciters=[], currentVerses=[], currentTafsir=[], quranFont=29, testAyah=null, recognition=null;
const quranStatus=$("#quranStatus");
function quranShow(){document.getElementById("audioLibraryPanel")?.setAttribute("hidden","");panel.hidden=true;tasPanel.hidden=true;resourcePanel.hidden=true;prayerPanel.hidden=true;quranPanel.hidden=false;$("#categoryGrid").hidden=true;$(".daily-strip").hidden=true;$(".section-heading").hidden=true;loadQuranData();window.scrollTo({top:quranPanel.offsetTop-12,behavior:"smooth"})}
function quranHome(){quranPanel.hidden=true;home()}
$("#quranBack").onclick=quranHome;
document.querySelectorAll('[data-open="quran"]').forEach(b=>b.addEventListener("click",quranShow));
async function loadQuranData(){
 if(quranSurahs.length && quranReciters.length)return;
 quranStatus.textContent="جارٍ تحميل فهرس السور والقراء...";
 try{
  const [sRes,rRes]=await Promise.all([
   fetch("https://api.alquran.cloud/v1/surah"),
   fetch("https://mp3quran.net/api/v3/reciters?language=ar")
  ]);
  if(!sRes.ok||!rRes.ok)throw new Error("تعذر الاتصال بمصادر القرآن");
  const sData=await sRes.json(),rData=await rRes.json();
  quranSurahs=sData.data||[]; quranReciters=rData.reciters||[];
  localStorage.setItem("azkarQuranSurahs",JSON.stringify(quranSurahs));
  localStorage.setItem("azkarQuranReciters",JSON.stringify(quranReciters));
  $("#surahSelect").innerHTML=quranSurahs.map(s=>`<option value="${s.number}">${s.number}. ${s.name} — ${s.englishName}</option>`).join("");
  const choices=[];
  quranReciters.forEach(r=>(r.moshaf||[]).forEach(m=>choices.push({name:r.name+" — "+m.name,server:m.server,moshaf:m.id,surah_list:m.surah_list})));
  quranReciters=choices;
  $("#reciterSelect").innerHTML=choices.map((r,i)=>`<option value="${i}">${r.name}</option>`).join("");
  if(!quranSurahs.length||!choices.length)throw new Error("لم تصل بيانات السور أو القراء");
  quranStatus.textContent="اختر السورة والقارئ، ثم استمتع بالقراءة والاستماع.";
  loadSelectedSurah();
 }catch(err){
  try{quranSurahs=JSON.parse(localStorage.getItem("azkarQuranSurahs")||"[]");quranReciters=JSON.parse(localStorage.getItem("azkarQuranReciters")||"[]");const choices=[];quranReciters.forEach(r=>(r.moshaf||[]).forEach(m=>choices.push({name:r.name+" — "+m.name,server:m.server,moshaf:m.id,surah_list:m.surah_list})));quranReciters=choices;}
  catch(e){}
  if(quranSurahs.length&&quranReciters.length){$("#surahSelect").innerHTML=quranSurahs.map(s=>`<option value="${s.number}">${s.number}. ${s.name} — ${s.englishName}</option>`).join("");$("#reciterSelect").innerHTML=quranReciters.map((r,i)=>`<option value="${i}">${r.name}</option>`).join("");quranStatus.textContent="تُعرض بيانات الفهرس المحفوظة على جهازك؛ قد تحتاج التلاوة إلى اتصال.";loadSelectedSurah();}
  else quranStatus.textContent="تعذر تحميل البيانات الآن. تحقق من اتصال الإنترنت ثم أعد المحاولة. "+err.message;
 }
}
$("#surahSelect").addEventListener("change",loadSelectedSurah);
$("#reciterSelect").addEventListener("change",playSelectedSurah);
async function loadSelectedSurah(){
 const id=$("#surahSelect").value;if(!id)return;
 const s=quranSurahs.find(x=>x.number==id);$("#readingTitle").textContent=s?s.name:"القرآن الكريم";
 quranStatus.textContent="جارٍ تحميل الآيات...";
 $("#versesBox").innerHTML="";
 try{
  let json;const cacheKey="azkarSurah_"+id;try{const res=await fetch(`https://api.alquran.cloud/v1/surah/${id}/quran-uthmani`);if(!res.ok)throw new Error("network");json=await res.json();localStorage.setItem(cacheKey,JSON.stringify(json.data.ayahs||[]));}catch(e){const saved=localStorage.getItem(cacheKey);if(!saved)throw e;json={data:{ayahs:JSON.parse(saved)}};quranStatus.textContent="السورة معروضة من النسخة المحفوظة على جهازك."}
  currentVerses=json.data.ayahs||[];
  // البسملة تُعرض كسطر مستقل ولا تُرقّم آيةً في أوائل السور،
  // مع المحافظة على ترقيم الفاتحة كما في مصحف حفص، وعدم وضع بسملة للتوبة.
  const showHeaderBasmala = Number(id)!==1 && Number(id)!==9;
  const basmalaHeader = showHeaderBasmala
    ? `<div class="basmala-header" aria-label="بسم الله الرحمن الرحيم">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>`
    : "";
  $("#versesBox").innerHTML=basmalaHeader + currentVerses.map(a=>`<span class="quran-verse" data-ayah="${a.numberInSurah}" translate="no">${a.text}</span><span class="ayah-number">${a.numberInSurah}</span> `).join("");
  quranStatus.textContent=`${s.name} — ${currentVerses.length} آية`;
  document.querySelectorAll(".quran-verse").forEach(v=>v.addEventListener("click",()=>loadSingleTafsir(Number(id),Number(v.dataset.ayah))));
  $("#tafsirBox").textContent="اضغط على آية لعرض تفسيرها، أو اعرض تفسير السورة كاملة.";
  playSelectedSurah();
 }catch(e){quranStatus.textContent="تعذر تحميل نص السورة. تحقق من الإنترنت أو افتح سورة سبق تحميلها."}
}
function playSelectedSurah(){
 const id=Number($("#surahSelect").value),rec=quranReciters[Number($("#reciterSelect").value)];
 if(!id||!rec)return;
 const surah=String(id).padStart(3,"0");
 if(rec.surah_list&& !String(rec.surah_list).split(",").includes(String(id))){$("#quranStatus").textContent="هذا المصحف لا يحتوي على السورة المختارة لهذا القارئ؛ اختر قارئًا آخر.";return;}
 $("#quranAudio").src=rec.server+surah+".mp3";
 $("#audioSurahName").textContent=quranSurahs.find(s=>s.number===id)?.name||"تلاوة القرآن";
 $("#audioReciterName").textContent=rec.name;
}
async function loadSingleTafsir(surah,ayah){const edition=$("#tafsirSelect").value;const box=$("#tafsirBox");box.textContent="جارٍ تحميل تفسير الآية...";const key=`azkarTafsir_${edition}_${surah}_${ayah}`;try{let data;try{const r=await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/${edition}`);if(!r.ok)throw Error();data=(await r.json()).data;localStorage.setItem(key,JSON.stringify(data));}catch(e){const cached=localStorage.getItem(key);if(!cached)throw e;data=JSON.parse(cached)}box.innerHTML=`<article class="tafsir-item"><b>الآية ${ayah} — ${$("#readingTitle").textContent}</b><p>${data.text}</p><small>المصدر: ${edition==="ar.muyassar"?"التفسير الميسر":"تفسير الجلالين"}</small></article>`;}catch(e){box.textContent="تعذر جلب التفسير حاليًا. حاول عند الاتصال بالإنترنت."}}
async function loadWholeTafsir(){const id=Number($("#surahSelect").value),edition=$("#tafsirSelect").value,box=$("#tafsirBox");if(!id)return;box.textContent="جارٍ تحميل تفسير السورة...";const key=`azkarTafsirSurah_${edition}_${id}`;try{let items;try{const r=await fetch(`https://api.alquran.cloud/v1/surah/${id}/${edition}`);if(!r.ok)throw Error();const j=await r.json();items=j.data.ayahs||[];localStorage.setItem(key,JSON.stringify(items));}catch(e){const saved=localStorage.getItem(key);if(!saved)throw e;items=JSON.parse(saved)}box.innerHTML=items.map(a=>`<article class="tafsir-item"><b>الآية ${a.numberInSurah}</b><p>${a.text}</p></article>`).join("");}catch(e){box.textContent="تعذر تحميل التفسير. اختر التفسير الميسر أو أعد المحاولة عند توفر الإنترنت."}}
$("#loadTafsir").addEventListener("click",loadWholeTafsir);
$("#fontPlus").onclick=()=>{quranFont=Math.min(quranFont+2,40);document.querySelectorAll(".quran-verse").forEach(x=>x.style.fontSize=quranFont+"px")};
$("#fontMinus").onclick=()=>{quranFont=Math.max(quranFont-2,20);document.querySelectorAll(".quran-verse").forEach(x=>x.style.fontSize=quranFont+"px")};
$("#startMemorize").onclick=()=>{
 if(!currentVerses.length){$("#speechResult").textContent="حمّل سورة أولًا.";return}
 testAyah=currentVerses[Math.floor(Math.random()*currentVerses.length)];
 $("#memorizeArea").hidden=false;
 $("#memorizePrompt").textContent=`سورة ${quranSurahs.find(s=>s.number==$("#surahSelect").value)?.name||""} — الآية ${testAyah.numberInSurah}`;
 $("#showHint").textContent="إظهار الإجابة";$("#speechResult").textContent="ابدأ القراءة من حفظك، وسيقارن التطبيق الكلمات بالتتابع.";
 $("#tajweedGuide").hidden=$("#testMode").value!=="tajweed";
 expectedWords=normalizeArabic(testAyah.text).split(" ").filter(Boolean);matchedWords=0;
};
$("#testMode").addEventListener("change",()=>{$("#tajweedGuide").hidden=$("#testMode").value!=="tajweed"});
$("#showHint").onclick=()=>{if(testAyah){$("#memorizePrompt").textContent=testAyah.text;$("#showHint").textContent="الإجابة ظاهرة"}};
function normalizeArabic(t){return (t||"").replace(/[\u064B-\u065F\u0670\u0640]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/[^\u0600-\u06FF\s]/g," ").replace(/\s+/g," ").trim()}
$("#speakAnswer").onclick=()=>{if(!testAyah)return;if(!("speechSynthesis" in window)){$("#speechResult").textContent="ميزة القراءة الصوتية غير مدعومة.";return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(testAyah.text);u.lang="ar-SA";u.rate=.82;speechSynthesis.speak(u)};
async function stopRecitation(){
 if(recognition){try{recognition.stop()}catch(e){}}
 $("#listenBtn").textContent="🎙️ ابدأ التسميع";
}
$("#listenBtn").onclick=async()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(recognition){await stopRecitation();$("#speechResult").textContent="تم إيقاف التسميع.";return}
 if(!SR){$("#speechResult").textContent="متصفحك لا يدعم التعرف على الصوت. استخدم Google Chrome المحدّث.";return}
 if(!testAyah){$("#speechResult").textContent="ابدأ الاختبار أولًا.";return}
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
  $("#speechResult").textContent="يلزم فتح الموقع عبر HTTPS أو localhost حتى يمكن طلب إذن الميكروفون.";return;
 }
 try{
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  stream.getTracks().forEach(track=>track.stop());
  recognition=new SR();recognition.lang="ar-SA";recognition.interimResults=true;recognition.continuous=true;recognition.maxAlternatives=1;matchedWords=0;
  $("#listenBtn").textContent="⏹ إيقاف التسميع";
  $("#speechResult").textContent="🎙️ الميكروفون يعمل الآن. ابدأ تلاوة الآية بوضوح.";
  recognition.onresult=e=>{
   let transcript="";for(let i=0;i<e.results.length;i++){if(e.results[i].isFinal)transcript+=e.results[i][0].transcript+" "}
   const said=normalizeArabic(transcript).split(" ").filter(Boolean);
   for(let i=matchedWords;i<said.length&&matchedWords<expectedWords.length;i++){
    if(said[i]===expectedWords[matchedWords]){matchedWords++;continue}
    const expected=expectedWords[matchedWords];
    $("#speechResult").innerHTML=`<b class="error-word">توقفنا عند موضع يحتاج مراجعة.</b><br>الكلمة التي التقطها الميكروفون: «${said[i]}»<br>الكلمة الصحيحة في الآية: «${expected}»<br>يمكنك إظهار الإجابة أو سماعها ثم إعادة المحاولة.`;
    try{recognition.stop()}catch(err){}return;
   }
   if(matchedWords>=expectedWords.length){$("#speechResult").textContent="أحسنت! اكتمل تسميع كلمات الآية حسب التعرف الصوتي التقريبي. راجع التجويد مع معلّم متقن.";try{recognition.stop()}catch(err){}}
   else if(said.length)$("#speechResult").textContent=`تقدم التسميع: ${matchedWords} من ${expectedWords.length} كلمة — تابع القراءة.`;
  };
  recognition.onerror=e=>{
   $("#speechResult").textContent=e.error==="not-allowed"?"لم تسمح باستخدام الميكروفون. فعّل الإذن من إعدادات المتصفح.":e.error==="audio-capture"?"لم يتم العثور على ميكروفون يعمل على الجهاز.":"تعذر التقاط الصوت. تحقق من الميكروفون وحاول مرة أخرى.";
   recognition=null;$("#listenBtn").textContent="🎙️ ابدأ التسميع";
  };
  recognition.onend=()=>{recognition=null;$("#listenBtn").textContent="🎙️ ابدأ التسميع"};
  recognition.start();
 }catch(e){
  $("#speechResult").textContent=e.name==="NotAllowedError"?"رفضت إذن الميكروفون. اسمح للموقع باستخدام الميكروفون من إعدادات المتصفح.":"تعذر تشغيل الميكروفون. تأكد من عدم استخدامه في تطبيق آخر ثم أعد المحاولة.";
  recognition=null;$("#listenBtn").textContent="🎙️ ابدأ التسميع";
 }
};

// مواقيت الصلاة عبر AlAdhan، مع طريقة الحساب المصرية رقم 5.
const prayerPanel=$("#prayerPanel");let prayerCoords={lat:27.1801,lon:31.1837,name:"أسيوط"},prayerTimes={},adhanObjectUrl=null,lastPrayerAlert="";
const prayerNames={Fajr:"الفجر",Dhuhr:"الظهر",Asr:"العصر",Maghrib:"المغرب",Isha:"العشاء"};
function showPrayerPanel(){document.getElementById("audioLibraryPanel")?.setAttribute("hidden","");panel.hidden=true;tasPanel.hidden=true;quranPanel.hidden=true;resourcePanel.hidden=true;prayerPanel.hidden=false;$("#categoryGrid").hidden=true;$(".daily-strip").hidden=true;$(".section-heading").hidden=true;loadPrayerTimes();window.scrollTo({top:prayerPanel.offsetTop-12,behavior:"smooth"})}
$("#prayerBack").onclick=()=>{prayerPanel.hidden=true;home()};document.querySelectorAll('[data-open="prayerTimes"]').forEach(b=>b.addEventListener("click",showPrayerPanel));
function dateForApi(){const d=new Date();return `${String(d.getDate()).padStart(2,"0")}-${String(d.getMonth()+1).padStart(2,"0")}-${d.getFullYear()}`}
async function loadPrayerTimes(){
 $("#prayerLocationLabel").textContent=`الموقع المحدد: ${prayerCoords.name} — طريقة الحساب: الهيئة المصرية العامة للمساحة.`;$("#prayerGrid").innerHTML="<div class='prayer-time-card'>جارٍ تحميل المواقيت...</div>";
 try{const r=await fetch(`https://api.aladhan.com/v1/timings/${dateForApi()}?latitude=${prayerCoords.lat}&longitude=${prayerCoords.lon}&method=5`);if(!r.ok)throw Error();const j=await r.json();prayerTimes=j.data.timings;localStorage.setItem("cachedPrayerTimes",JSON.stringify({date:dateForApi(),times:prayerTimes,coords:prayerCoords}));$("#prayerGrid").innerHTML=Object.entries(prayerNames).map(([k,n])=>`<div class="prayer-time-card"><b>${n}</b><strong>${String(prayerTimes[k]||"--:--").split(" ")[0]}</strong></div>`).join("");updatePrayerCountdown()}
 catch(e){const cached=JSON.parse(localStorage.getItem("cachedPrayerTimes")||"null");if(cached&&cached.date===dateForApi()){prayerTimes=cached.times;$("#prayerGrid").innerHTML=Object.entries(prayerNames).map(([k,n])=>`<div class="prayer-time-card"><b>${n}</b><strong>${String(prayerTimes[k]||"--:--").split(" ")[0]}</strong></div>`).join("");updatePrayerCountdown();$("#prayerLocationLabel").textContent+=" — تُعرض آخر مواقيت محفوظة."}else{$("#prayerGrid").innerHTML="<div class='prayer-time-card'>تعذر تحميل المواقيت. تحقق من الإنترنت.</div>"}}
}
$("#citySelect").addEventListener("change",e=>{const [c,n]=e.target.value.split("|");const [lat,lon]=c.split(",").map(Number);prayerCoords={lat,lon,name:n};localStorage.setItem("prayerCity",e.target.value);loadPrayerTimes()});
const savedCity=localStorage.getItem("prayerCity");if(savedCity){$("#citySelect").value=savedCity;const [c,n]=savedCity.split("|");const [lat,lon]=c.split(",").map(Number);prayerCoords={lat,lon,name:n}}
$("#useLocation").onclick=()=>{if(!navigator.geolocation){alert("تحديد الموقع غير مدعوم.");return}navigator.geolocation.getCurrentPosition(p=>{prayerCoords={lat:p.coords.latitude,lon:p.coords.longitude,name:"موقعي الحالي"};loadPrayerTimes()},()=>alert("تعذر تحديد الموقع. اسمح بإذن الموقع أو اختر المدينة يدويًا."),{enableHighAccuracy:true,timeout:12000})};
$("#adhanEnabled").checked=localStorage.getItem("adhanEnabled")==="true";$("#adhanEnabled").onchange=e=>localStorage.setItem("adhanEnabled",e.target.checked);
$("#reminderEnabled").checked=localStorage.getItem("reminderEnabled")!=="false";$("#reminderEnabled").onchange=e=>localStorage.setItem("reminderEnabled",e.target.checked);
function setAdhanBlob(blob){if(!blob)return;if(adhanObjectUrl)URL.revokeObjectURL(adhanObjectUrl);adhanObjectUrl=URL.createObjectURL(blob);$("#adhanPreview").src=adhanObjectUrl;$("#adhanPreview").hidden=false}
function openAdhanDB(){return new Promise((resolve,reject)=>{if(!indexedDB){reject(Error("no indexedDB"));return}const req=indexedDB.open("AzkarMuslimMedia",1);req.onupgradeneeded=()=>req.result.createObjectStore("audio");req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function saveAdhanBlob(blob){try{const db=await openAdhanDB();const tx=db.transaction("audio","readwrite");tx.objectStore("audio").put(blob,"selectedAdhan");tx.oncomplete=()=>db.close()}catch(e){}}
async function restoreAdhanBlob(){try{const db=await openAdhanDB();const tx=db.transaction("audio","readonly"),req=tx.objectStore("audio").get("selectedAdhan");req.onsuccess=()=>{if(req.result)setAdhanBlob(req.result);db.close()};req.onerror=()=>db.close()}catch(e){}}
$("#adhanFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;setAdhanBlob(f);saveAdhanBlob(f)});restoreAdhanBlob();
async function playAdhan(){const a=$("#adhanPreview");if(adhanObjectUrl){a.currentTime=0;try{await a.play();return}catch(e){}}}
$("#testAdhan").onclick=playAdhan;
$("#enableNotifications").onclick=async()=>{if(!("Notification"in window)){alert("المتصفح لا يدعم الإشعارات.");return}if(!window.isSecureContext){alert("الإشعارات تحتاج إلى موقع يعمل عبر HTTPS.");return}const p=await Notification.requestPermission();if(p==="granted"){const reg=await navigator.serviceWorker?.ready;if(reg)await reg.showNotification("تم تفعيل التنبيهات",{body:"سيذكّرك أذكار المسلم قبل الصلاة وعند دخول وقتها أثناء تشغيل الخدمة المدعومة."});alert("تم السماح بإشعارات الجهاز.")}else alert("لم يتم السماح بالإشعارات.")};
async function prayerNotification(title,body,tag){try{if("serviceWorker"in navigator){const reg=await navigator.serviceWorker.ready;await reg.showNotification(title,{body,tag,icon:"icon.svg",badge:"icon.svg",renotify:false})}else if("Notification"in window&&Notification.permission==="granted")new Notification(title,{body,tag})}catch(e){}}
function parsePrayerDate(key,dayOffset=0){const [h,m]=String(prayerTimes[key]||"00:00").split(" ")[0].split(":").map(Number);const d=new Date();d.setDate(d.getDate()+dayOffset);d.setHours(h||0,m||0,0,0);return d}
function getNextPrayer(){if(!prayerTimes)return null;const now=new Date();for(const [key,name] of Object.entries(prayerNames)){const at=parsePrayerDate(key);if(at>now)return {key,name,at}}const first=Object.keys(prayerNames)[0];return {key:first,name:prayerNames[first],at:parsePrayerDate(first,1)}}
function updatePrayerCountdown(){const next=getNextPrayer();if(!next)return;const diff=Math.max(0,next.at-Date.now()),hh=Math.floor(diff/3600000),mm=Math.floor(diff%3600000/60000),ss=Math.floor(diff%60000/1000);$("#nextPrayerName").textContent=next.name;$("#prayerCountdown").textContent=[hh,mm,ss].map(x=>String(x).padStart(2,"0")).join(":");$("#nextPrayerAt").textContent="موعدها المتوقع: "+next.at.toLocaleTimeString("ar-EG",{hour:"2-digit",minute:"2-digit"})}
function checkPrayerAlerts(){if(!prayerTimes)return;const now=new Date();for(const [k,n] of Object.entries(prayerNames)){const at=parsePrayerDate(k),diff=at-now,base=now.toDateString(),preId=`${base}-${k}-pre`,adhanId=`${base}-${k}-adhan`;
  if($("#reminderEnabled").checked&&diff>0&&diff<=600000&&localStorage.getItem("alert-"+preId)!=="1"){localStorage.setItem("alert-"+preId,"1");if("Notification"in window&&Notification.permission==="granted")prayerNotification("اقترب موعد أذان "+n,"اقترب موعد الأذان؛ بقي أقل من عشر دقائق.",preId)}
  if($("#adhanEnabled").checked&&Math.abs(diff)<=20000&&localStorage.getItem("alert-"+adhanId)!=="1"){localStorage.setItem("alert-"+adhanId,"1");if("Notification"in window&&Notification.permission==="granted")prayerNotification("حان الآن موعد صلاة "+n,"حان وقت الصلاة — أذكار المسلم",adhanId);if(!document.hidden)playAdhan()}
 }}
setInterval(()=>{updatePrayerCountdown();checkPrayerAlerts()},1000);setInterval(()=>{if(!prayerPanel.hidden)loadPrayerTimes()},3600000);


// شاشة البداية: زر «ابدأ رحلتك» يزيل الغطاء فورًا ويُظهر الصفحة الرئيسية.
(()=>{const splash=document.getElementById('splashScreen');const enter=document.getElementById('splashEnter');if(!splash||!enter)return;let closed=false;const close=()=>{if(closed)return;closed=true;splash.classList.add('is-leaving');window.setTimeout(()=>{splash.remove();document.querySelector('main')?.scrollIntoView({behavior:'smooth',block:'start'});},260)};enter.addEventListener('click',close);})();

// مكتبة الصوتيات التفاعلية
(()=>{
 const audioPanel=document.getElementById('audioLibraryPanel');if(!audioPanel)return;
 const $a=id=>document.getElementById(id);let activeReciter=null,libraryAudioUrl=null;
 function showAudioLibrary(){
  [panel,tasPanel,resourcePanel,quranPanel,prayerPanel].forEach(x=>{if(x)x.hidden=true});
  audioPanel.hidden=false;$('#categoryGrid').hidden=true;$('.daily-strip').hidden=true;$('.section-heading').hidden=true;
  window.scrollTo({top:audioPanel.offsetTop-12,behavior:'smooth'});loadLibraryReciters();
 }
 document.querySelectorAll('[data-open="audioLibrary"]').forEach(b=>b.addEventListener('click',showAudioLibrary));
 $a('audioLibraryBack').onclick=()=>{audioPanel.hidden=true;home()};
 document.querySelectorAll('[data-audio-tab]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-audio-tab]').forEach(x=>x.classList.toggle('active',x===b));
  $a('recitersAudioView').hidden=b.dataset.audioTab!=='reciters';$a('adhanAudioView').hidden=b.dataset.audioTab!=='adhan';
 }));
 async function loadLibraryReciters(){
  $a('reciterListHint').textContent='جارٍ جلب قائمة القراء...';
  try{await loadQuranData();}catch(e){}
  if(!quranReciters.length){$a('reciterCards').innerHTML='<div class="audio-empty">تعذر تحميل القائمة. تحقق من الإنترنت ثم أعد المحاولة.</div>';$a('reciterListHint').textContent='لم يتم تحميل القائمة';return}
  const choices=quranReciters.filter(r=>r&&r.name&&r.server);
  $a('audioReciterCount').textContent=choices.length+' مصحفًا متاحًا';
  $a('reciterListHint').textContent='اختر اسم القارئ والمصحف المتاح';
  $a('libraryMoshafSelect').innerHTML=choices.map((r,i)=>`<option value="${i}">${escapeAudioText(r.name)}</option>`).join('');
  const nums=quranSurahs.length?quranSurahs:Array.from({length:114},(_,i)=>({number:i+1,name:['الفاتحة','البقرة','آل عمران','النساء','المائدة','الأنعام','الأعراف','الأنفال','التوبة','يونس','هود','يوسف','الرعد','إبراهيم','الحجر','النحل','الإسراء','الكهف','مريم','طه'][i]||'السورة '+(i+1)}));
  $a('librarySurahSelect').innerHTML=nums.map(s=>`<option value="${s.number}">${s.number}. ${escapeAudioText(s.name)}</option>`).join('');
  renderReciterCards(choices);selectLibraryReciter(0);
 }
 function escapeAudioText(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 function renderReciterCards(list){
  $a('reciterCards').innerHTML=list.map((r)=>{const i=quranReciters.indexOf(r);return `<button class="reciter-card ${activeReciter===i?'active':''}" data-reciter-index="${i}"><span class="reciter-avatar">♬</span><span><b>${escapeAudioText(r.name)}</b><small>تلاوات القرآن الكريم</small></span></button>`}).join('');
 }
 function selectLibraryReciter(i){activeReciter=Number(i);const r=quranReciters[activeReciter];if(!r)return;
  $a('libraryMoshafSelect').value=String(activeReciter);$a('libraryNowPlaying').textContent=r.name;$a('libraryNowSub').textContent='اختر السورة ثم اضغط تشغيل التلاوة.';
  renderReciterCards(quranReciters.filter(x=>x.name.toLowerCase().includes(($a('reciterSearch').value||'').trim().toLowerCase())));setLibraryAudio();
 }
 function setLibraryAudio(){const r=quranReciters[activeReciter],id=Number($a('librarySurahSelect').value||1);if(!r)return;
  const url=r.server+String(id).padStart(3,'0')+'.mp3';const audio=$a('libraryAudio');audio.dataset.local='0';audio.src=url;$a('audioSaveStatus').textContent='التلاوة جاهزة للتشغيل عند الاتصال. يمكنك حفظ السورة على الجهاز.';
  const title=quranSurahs.find(s=>s.number===id)?.name||('السورة '+id);$a('libraryNowSub').textContent=title+' — '+r.name;
 }
 $a('reciterCards').addEventListener('click',e=>{const b=e.target.closest('[data-reciter-index]');if(b)selectLibraryReciter(b.dataset.reciterIndex)});
 $a('reciterSearch').addEventListener('input',()=>{const q=$a('reciterSearch').value.trim().toLowerCase();renderReciterCards(quranReciters.filter(r=>r.name.toLowerCase().includes(q)))});
 $a('libraryMoshafSelect').addEventListener('change',e=>selectLibraryReciter(e.target.value));$a('librarySurahSelect').addEventListener('change',setLibraryAudio);
 $a('playLibraryAudio').onclick=async()=>{setLibraryAudio();const a=$a('libraryAudio'),key='quran:'+activeReciter+':'+Number($a('librarySurahSelect').value||1);const saved=await getSavedAudio(key);try{if(saved){if(libraryAudioUrl)URL.revokeObjectURL(libraryAudioUrl);libraryAudioUrl=URL.createObjectURL(saved);a.src=libraryAudioUrl;a.dataset.local='1';$a('audioSaveStatus').textContent='يتم تشغيل النسخة المحفوظة على جهازك دون إنترنت.'}await a.play()}catch(e){$a('audioSaveStatus').textContent='تعذر التشغيل. تحقق من الاتصال أو احفظ السورة بعد توفر الإنترنت.'}};
 async function getSavedAudio(key){try{const db=await openAdhanDB();return await new Promise(resolve=>{const req=db.transaction('audio','readonly').objectStore('audio').get(key);req.onsuccess=()=>{resolve(req.result||null);db.close()};req.onerror=()=>{resolve(null);db.close()}})}catch(e){return null}}
 async function saveAudio(key,blob){try{const db=await openAdhanDB();await new Promise((resolve,reject)=>{const tx=db.transaction('audio','readwrite');tx.objectStore('audio').put(blob,key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});db.close();return true}catch(e){return false}}
 $a('saveLibraryAudio').onclick=async()=>{const r=quranReciters[activeReciter],id=Number($a('librarySurahSelect').value||1);if(!r)return;const key='quran:'+activeReciter+':'+id;$a('audioSaveStatus').textContent='جارٍ تنزيل السورة وحفظها على جهازك...';
  const old=await getSavedAudio(key);if(old){$a('audioSaveStatus').textContent='هذه السورة محفوظة بالفعل على جهازك ويمكن تشغيلها دون إنترنت.';return}
  try{const response=await fetch(r.server+String(id).padStart(3,'0')+'.mp3');if(!response.ok)throw Error('download');const blob=await response.blob();if(!blob.size)throw Error('empty');if(await saveAudio(key,blob)){$a('audioSaveStatus').textContent='تم حفظ السورة على الجهاز. يمكنك تشغيلها دون إنترنت.'}else throw Error('storage')}
  catch(e){$a('audioSaveStatus').textContent='لم يكتمل الحفظ. تحقق من الاتصال ومساحة التخزين ثم حاول مرة أخرى.'}
 };
 // عند اختيار سورة محفوظة، استخدم النسخة المحلية أولًا.
 $a('libraryAudio').addEventListener('play',async()=>{const key='quran:'+activeReciter+':'+Number($a('librarySurahSelect').value||1);const blob=await getSavedAudio(key);if(blob&&$a('libraryAudio').dataset.local!=='1'){if(libraryAudioUrl)URL.revokeObjectURL(libraryAudioUrl);libraryAudioUrl=URL.createObjectURL(blob);$a('libraryAudio').src=libraryAudioUrl;$a('libraryAudio').dataset.local='1';$a('audioSaveStatus').textContent='يتم تشغيل النسخة المحفوظة على جهازك دون إنترنت.';try{await $a('libraryAudio').play()}catch(e){}}});
 // استعادة تسجيل الأذان المحفوظ على الجهاز.
 getSavedAudio('libraryAdhan:selected').then(blob=>{if(blob){const savedUrl=URL.createObjectURL(blob);$a('libraryAdhanAudio').src=savedUrl;$a('libraryAdhanName').textContent='تسجيل الأذان المحفوظ على هذا الجهاز';$a('libraryAdhanStatus').textContent='يمكن تشغيله دون اتصال بالإنترنت.'}});
 // حفظ ملف الأذان الذي يختاره المستخدم داخل قاعدة البيانات المحلية.
 $a('libraryAdhanFile').addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;const url=URL.createObjectURL(f);$a('libraryAdhanAudio').src=url;$a('libraryAdhanName').textContent=f.name;$a('libraryAdhanStatus').textContent='جارٍ حفظ التسجيل على الجهاز...';const ok=await saveAudio('libraryAdhan:selected',f);$a('libraryAdhanStatus').textContent=ok?'تم حفظ تسجيل الأذان محليًا، ويمكن تشغيله دون إنترنت.':'تعذر حفظ التسجيل؛ يمكنك تشغيل الملف ما دام محددًا.';});
})();
