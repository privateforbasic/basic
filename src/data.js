export const courses = [
  {
    id: "1",
    name: "UI Development",
    description: "Դարձի՜ր HR մասնագետ պահանջված ոլորտում",
    filter: "beginner",
    href: "ui-development",
    image: {
      src: "html.svg",
      alt: "ui-development",
    },
    gradient: "linear-gradient(145deg, #e44d26, #2063af)",
    landing: {
      name: "UI ծրագրավորման կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    additional: {
      title: "Information",
      texts: [
        "The course is held 3 days a week, 2 hours a day.",
        "Practical tasks are periodically implemented during the training.",
        "Graduates are awarded a certificate after completing all stages of the course.",
        "The first lesson is experimental.",
        "Corporate packages for organizations.",
        "* Students progress is assessed using a specially designed grading system.",
        "Still have questions?&nbsp;<a href='#'>Contact us!</a>",
      ],
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "2",
    name: "JavaScript ծրագրավորում",
    description:
      "Մասնագիտացի՛ր աշխատաշուկայում անհամեմատ մեծ պահանջարկ վայելող ծրագրավորման միջավայրում",
    filter: "beginner",
    href: "front-end",
    image: {
      src: "js.svg",
      alt: "front-end",
    },
    gradient: "linear-gradient(145deg, #f7df1c, #F9A825)",
    landing: {
      name: "JavaScript ծրագրավորման կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],

      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "3",
    name: "JavaScript Advanced",
    description: "JavaScript-ի ամենամասնագիտացված դասընթացը Հայաստանում",
    filter: "intermediate",
    href: "javascript",
    image: {
      src: "js.svg",
      alt: "javascript",
    },
    gradient: "linear-gradient(145deg, #c061c0, #421831)",
    landing: {
      name: "JavaScript Advanced կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "4",
    name: "React ծրագրավորում",
    description: "Դարձի՜ր HR մասնագետ պահանջված ոլորտում",
    filter: "pro",
    href: "react",
    image: {
      src: "react.svg",
      alt: "react",
    },
    gradient: "linear-gradient(145deg, #53c2de, #0097A7)",
    landing: {
      name: "React կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "5",
    name: "Node.js ծրագրավորում",
    description: "Դարձի՜ր HR մասնագետ պահանջված ոլորտում",
    filter: "pro",
    href: "nodejs",
    image: {
      src: "nodejs.svg",
      alt: "nodejs",
    },
    gradient: "linear-gradient(145deg, #549e43, #388E3C)",
    landing: {
      name: "Node.js կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",
          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "6",
    name: "Java ծրագրավորում",
    description:
      "Ստեղծի՛ր Java հիմքով բազմաֆունկցիոնալ և բազմապլատֆորմ հավելվածներ",
    filter: "beginner",
    href: "java",
    image: {
      src: "java.svg",
      alt: "java",
    },
    gradient: "linear-gradient(145deg, #FF5722, #5483a1)",
    landing: {
      name: "Java կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "7",
    name: "C++ ծրագրավորում",
    description:
      "Տիրապետի՛ր C++ -ին, որը հանդիսանում է մի շարք ծրագրավորման լեզուների հիմքը",
    filter: "intermediate",
    href: "cplusplus",
    image: {
      src: "cplusplus.svg",
      alt: "cplusplus",
    },
    gradient: "linear-gradient(145deg, #5c8dbc, #1b4674)",
    landing: {
      name: "C++ կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "8",
    name: "C Sharp ծրագրավորում",
    description: "Դարձի՜ր HR մասնագետ պահանջված ոլորտում",
    filter: "intermediate",
    href: "csharp",
    image: {
      src: "csharp.svg",
      alt: "csharp",
    },
    gradient: "linear-gradient(145deg, #973596, #602376)",
    landing: {
      name: "C Sharp կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "9",
    name: "Python ծրագրավորում",
    description: "Սովորի՛ր ամենաթրենդային ծրագրավորման լեզուն",
    filter: "beginner",
    href: "python",
    image: {
      src: "python.svg",
      alt: "python",
    },
    gradient: "linear-gradient(145deg, #fecb39, #3775a8)",
    landing: {
      name: "Python կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "10",
    name: "Android ծրագրավորում",
    description:
      "Մասնակցի՛ր մոբայլ ծրագրավորման ոլորտում բարձր պահանջարկ ունեցող Android-ի մասնագիտացված դասընթացին",
    filter: "intermediate",
    href: "android",
    image: {
      src: "android.svg",
      alt: "android",
    },
    gradient: "linear-gradient(145deg, #A4C639, #3A4C00)",
    landing: {
      name: "Android կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "11",
    name: "iOS ծրագրավորում",
    description:
      "Մասնակցի՛ր մոբայլ ծրագրավորման ոլորտում բարձր պահանջարկ ունեցող Android-ի մասնագիտացված դասընթացին",
    filter: "intermediate",
    href: "ios",
    image: {
      src: "swift.svg",
      alt: "swift",
    },
    gradient: "linear-gradient(145deg, #ff5721, #D84315)",
    landing: {
      name: "iOS կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "12",
    name: "Ծրագրավորման հիմունքներ",
    description: "Սկսի՛ր ծրագրավորողի քո կարիերան 0-ից",
    filter: "beginner",
    href: "programming-basics",
    image: {
      src: "programming-basics.svg",
      alt: "programming-basics",
    },
    gradient: "linear-gradient(145deg, #f44335, #a72d24)",
    landing: {
      name: "Ծրագրավորման հիմունքներ",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "13",
    name: "IT Recruitment",
    description: "Նախագծի՛ր կայքերի և հավելվածների կառուցվածքը",
    filter: "pro",
    href: "it-recruitment",
    image: {
      src: "it-recruitment.svg",
      alt: "it-recruitment",
    },
    gradient: "linear-gradient(145deg, #29F49A, #009EFD)",
    landing: {
      name: "IT Recruitment հիմունքներ",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "14",
    name: "UI/UX դիզայն",
    description: "Նախագծի՛ր կայքերի և հավելվածների կառուցվածքը",
    filter: "pro",
    href: "ui-ux",
    image: {
      src: "ui-ux.svg",
      alt: "ui-ux",
    },
    gradient: "linear-gradient(145deg, #db295c, #f7d01b)",
    landing: {
      name: "UI/UX դիզայն կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "15",
    name: "Ավտոմատացված QA",
    description:
      "Մասնակցի՛ր մոբայլ ծրագրավորման ոլորտում բարձր պահանջարկ ունեցող Android-ի մասնագիտացված դասընթացին",
    filter: "intermediate",
    href: "automated-qa",
    image: {
      src: "automated-qa.svg",
      alt: "automated-qa",
    },
    gradient: "linear-gradient(145deg, #88c3e0, #4281a0)",
    landing: {
      name: "Ավտոմատացված QA կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "16",
    name: "Մեխնանիկական QA",
    description:
      "Մասնակցի՛ր մոբայլ ծրագրավորման ոլորտում բարձր պահանջարկ ունեցող Android-ի մասնագիտացված դասընթացին",
    filter: "beginner",
    href: "manual-qa",
    image: {
      src: "manual-qa.svg",
      alt: "manual-qa",
    },
    gradient: "linear-gradient(145deg, #5a8d98, #376a75)",
    landing: {
      name: "Մեխնանիկական QA կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "17",
    name: "Ալգորիթմների տեսություն",
    description:
      "Մասնակցի՛ր մոբայլ ծրագրավորման ոլորտում բարձր պահանջարկ ունեցող Android-ի մասնագիտացված դասընթացին",
    filter: "intermediate",
    href: "algorithms",
    image: {
      src: "algorithms.svg",
      alt: "algorithms",
    },
    gradient: "linear-gradient(145deg, #f75d82, #7780f0)",
    landing: {
      name: "Ալգորիթմների տեսություն",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "18",
    name: "Agile Project Management",
    description: "Տիրապետի՛ր նախագծերի կառավարման գործիքներին և սկզբունքներին",
    filter: "intermediate",
    href: "pm",
    image: {
      src: "pm.svg",
      alt: "pm",
    },
    gradient: "linear-gradient(145deg, #e6394f, #cc2e42)",
    landing: {
      name: "Agile Project Management",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
  {
    id: "19",
    name: "IT Անգլերեն",
    description: "Զարգացրու՛ մասնագիտական հմտություններդ ՏՏ ոլորտում ",
    filter: "intermediate",
    href: "it-english",
    image: {
      src: "it-english.svg",
      alt: "it-english",
    },
    gradient: "linear-gradient(145deg, #29347a, #25306c)",
    landing: {
      name: "IT Անգլերեն կուրս",
      description:
        "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
      signUp: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել",
      },
    },
    benefits: [
      {
        id: "1",
        image: {
          src: "1.svg",
          alt: "Ուսուցման լավագույն մեթոդները",
        },
        title: "Ուսուցման լավագույն մեթոդները",
        description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
      },
      {
        id: "2",
        image: {
          src: "2.svg",
          alt: "Ստուգված դասընթաց",
        },
        title: "Ստուգված դասընթաց",
        description:
          "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
      },
      {
        id: "3",
        image: {
          src: "3.svg",
          alt: "Ներառված պորտֆոլիո",
        },
        title: "Ներառված պորտֆոլիո",
        description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
      },
      {
        id: "4",
        image: {
          src: "4.svg",
          alt: "Վկայականի հիման վրա",
        },
        title: "Վկայականի հիման վրա",
        description: "Լավագույն շրջանավարտներին տրված վկայականներ",
      },
    ],
    discounts: {
      title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
      articles: [
        {
          id: "1",
          percentage: "50%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
          dataAosDelay: "550",
        },
        {
          id: "2",
          percentage: "100%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
          dataAosDelay: "450",
        },
        {
          id: "3",
          percentage: "30%",
          description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
          dataAosDelay: "650",
        },
      ],
    },
    instructors: {
      title: "Դասընթացավարներ լավագույն ընկերություններից",
      peoples: [
        {
          id: "1",
          image: {
            src: "kristina.webp",
            alt: "Քրիստինա Հովսեփյան",
          },
          href: "#",
          title: "Քրիստինա Հովսեփյան",
          description: "UI/UX դիզայներ PicsArt-ում",
        },
        {
          id: "2",
          image: {
            src: "lilit.webp",
            alt: "Լիլիթ Գրիգորյան",
          },
          href: "#",
          title: "Լիլիթ Գրիգորյան",
          description: "UI/UX դիզայներ Digitain-ում",
        },
        {
          id: "3",
          image: {
            src: "zaruhi.webp",
            alt: "Զարուհի Քերոբյան",
          },
          href: "#",
          title: "Զարուհի Քերոբյան",
          description: "UI/UX դիզայներ 10Web.io-ում",
        },
      ],
    },
    whoCanAttend: {
      title: "Դասընթացը հենց քեզ համար է, եթե",
      texts: [
        {
          id: "1",
          title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
        },
        {
          id: "2",
          title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
        },
        {
          id: "3",
          title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
        },
      ],
    },
    information: {
      texts: [
        {
          id: "1",
          title: "Տևողությունը՝ 3 ամիս",
        },
        {
          id: "2",
          title: "Գինը՝ 45.000 դրամ/ամիս",
        },
        {
          id: "3",
          title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
        },
      ],
    },
    opportunities: {
      title: "Դասընթացի ավարտից հետո կկարողանաս",
      articles: [
        {
          id: "1",
          title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
          image: {
            src: "5.svg",
            alt: "Websites and Applications",
          },
          style: "",
        },
        {
          id: "2",
          title: "հմտորեն աշխատել Adobe XD ծրագրով",
          image: {
            src: "6.svg",
            alt: "Adobe XD",
          },
          style: "filter: drop-shadow(0px 0px 25px #582b4999)",
        },
        {
          id: "3",
          title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

          image: {
            src: "7.svg",
            alt: "Real Rroject",
          },
          style: "",
        },
        {
          id: "4",
          title:
            "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
          image: {
            src: "8.svg",
            alt: "Designer",
          },
          style: "",
        },
      ],
    },
    syllabus: {
      title: "Ի՞նչ եք սովորելու",
      sections: [
        {
          id: "1",
          title: "Փուլ 1",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
            { id: "9", title: "Making User Map" },
            { id: "10", title: "What is Wireframing" },
            { id: "11", title: "Grid Systems" },
            { id: "12", title: "Grid Systems" },
            { id: "13", title: "Website Structure" },
            { id: "14", title: "Responsive Design" },
            { id: "15", title: "Responsive Design" },
            { id: "16", title: "Adaptive Design" },
            { id: "17", title: "Creating Wireframes" },
            { id: "18", title: "Working on projects" },
            { id: "19", title: "Understanding UI Design Style" },
            { id: "20", title: "Sizes and spacings on Web" },
            {
              id: "21",
              title: "General Information about Elements in Web sites",
            },
            { id: "22", title: "Adobe Illustrator short introduction" },
            { id: "23", title: "Adobe Photoshop short introduction" },
            { id: "24", title: "What is Typography" },
            { id: "25", title: "Typography standards on the web" },
            { id: "26", title: "What is UI KIT" },
            { id: "27", title: "Creating students projects UI KIT" },
            { id: "28", title: "What is Material Design" },
            { id: "29", title: "What is Human Interface Guidelines" },
            { id: "30", title: "What is Fluent Design" },
            { id: "31", title: "Creating UI/UX Designer CV" },
            { id: "32", title: "Creating UI/UX Designer Portfolio" },
            { id: "33", title: "Theoretical and Practical Testing" },
          ],
        },
        {
          id: "2",
          title: "Փուլ 2",
          list: [
            { id: "1", title: "General Information about Design" },
            { id: "2", title: "What is Web Design" },
            { id: "3", title: "What is UI/UX Design" },
            { id: "4", title: "Steps to create Product Design" },
            { id: "5", title: "Adobe XD Introduction" },
            { id: "6", title: "What User Flows are" },
            { id: "7", title: "What is user Journey Map" },
            { id: "8", title: "Using Whimsical" },
          ],
        },
      ],
      link: {
        href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
        text: "Գրանցվել հիմա",
      },
    },
    video: {
      title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
      href: "https://www.youtube.com/embed/28H9RTlmUZM",
    },
    portfolio: {
      image: {
        src: "behance.svg",
        alt: "Behance Logo",
      },
      texts: [
        "Ոգեշնչման կարիք ունե՞ք: Այստեղ դուք կարող եք գտնել այն: :)",
        "Պորտֆոլիո պատրաստված  մեր ուսանողների կողմից:",
      ],
      link: {
        href: "https://behance.net/",
        text: "Վայելեք",
      },
    },
  },
];

export const coursesPage = {
  benefits: {
    title: " մասնագիտություն ձեռք բերելու ճիշտ ժամանակը",
    articles: [
      {
        id: "1",
        image: {
          src: "https://image.flaticon.com/icons/svg/906/906175.svg",
          alt: "",
        },
        title: "Տեսական",
        description: "Տեսական գիտելիքների ձեռքբերում յուրաքանչյուր դասին",
      },
      {
        id: "2",
        image: {
          src: "https://image.flaticon.com/icons/svg/2828/2828881.svg",
          alt: "",
        },
        title: "Գործնական",
        description: "Գործնական գիտելիքների ձեռքբերում յուրաքանչյուր դասին",
      },
      {
        id: "3",
        image: {
          src: "https://image.flaticon.com/icons/svg/2830/2830919.svg",
          alt: "",
        },
        title: "Արդյունք",
        description:
          "Համադրելով տեսականն ու գործնականը ստանալով իրական նախագծեր",
      },
    ],
  },
  faq: {
    title: "Հաժախ տրվող հարցեր",
    questions: [
      {
        id: "1",
        question:
          "Պե՞տք է ունենալ նախնական գիտելիքներ որևէ դասընթացին մասնակցելու համար",
        answer:
          "Ծրագրավորման դասընթացներին մասնակցելու համար անհրաժեշտ է հանձնել ընդունելության համար նախատեսված տրամաբանական և մաթեմատիկական բնույթի թեստ, քանի որ ծրագրավորման մեջ կարևոր նախապայման է ալգորիթմիկ մտածողությունը։",
      },
      {
        id: "2",
        question: "Հնարավո՞ր է լրիվ 0-ից սովորել Ձեզ մոտ",
        answer:
          "Այո, քանի որ նաև առկա են սկսնակների համար նախատեսված դասընթացներ։",
      },
      {
        id: "3",
        question:
          "Պե՞տք է ունենալ նախնական գիտելիքներ որևէ դասընթացին մասնակցելու համար",
        answer:
          "Ծրագրավորման դասընթացներին մասնակցելու համար անհրաժեշտ է հանձնել ընդունելության համար նախատեսված տրամաբանական և մաթեմատիկական բնույթի թեստ, քանի որ ծրագրավորման մեջ կարևոր նախապայման է ալգորիթմիկ մտածողությունը։",
      },
      {
        id: "4",
        question: "Հնարավո՞ր է լրիվ 0-ից սովորել Ձեզ մոտ",
        answer:
          "Այո, քանի որ նաև առկա են սկսնակների համար նախատեսված դասընթացներ։",
      },
      {
        id: "5",
        question: "Հնարավո՞ր է լրիվ 0-ից սովորել Ձեզ մոտ",
        answer:
          "Այո, քանի որ նաև առկա են սկսնակների համար նախատեսված դասընթացներ։",
      },
    ],
  },
  filters: [
    {
      id: "1",
      filter: "",
      title: "Բոլոր դասընթացները",
    },
    {
      id: "2",
      filter: "beginner",
      title: "Սկսնակների համար",
    },
    {
      id: "3",
      filter: "intermediate",
      title: "Միջին մակարդակի",
    },
    {
      id: "4",
      filter: "pro",
      title: "Վերապատրաստում <b>(PRO)</b>",
    },
  ],
};

export const home = {
  landing: {
    hgroup: {
      top: "Պահանջված մասնագետ դառնալու",
      bottom: "Ժամանակը հիմա է",
    },
    buttomText: "Դասընթացներ",
  },
  advantages: [
    {
      image: {
        src: "https://www.basic.am/static/media/professionalism.47422e6e.svg",
        alt: "Պրոֆեսիոնալիզմ",
      },
      title: "Պրոֆեսիոնալիզմ",
      description:
        "Մենք կիրառում ենք ծրագրավորման ուսուցման լավագույն մեթոդները՝ պատրաստելով որակյալ կադրեր և ապահովելով մեր ուսանողների համար բարձր վարձատրվող հեռանկարային աշխատանք։",
      id: "1",
    },
    {
      image: {
        src: "https://www.basic.am/static/media/innovation.834da7bb.svg",
        alt: "Նորարարություն",
      },
      title: "Նորարարություն",
      description:
        "Հաշվի առնելով ՏՏ ոլորտի ակնթարթային զարգացումը՝ ուսումնասիրում ենք նորագույն տեխնոլոգիաները և մեր ուսանողների հետ միասին նպաստում դրանց զարգացմանն ու գործնական հարթակում կիրառմանը։",
      id: "2",
    },
    {
      image: {
        src: "https://www.basic.am/static/media/horizons.82ba57f1.svg",
        alt: "Նոր հորիզոններ",
      },
      title: "Նոր հորիզոններ",
      description:
        "Կստեղծենք նոր հորիզոններ և հեռանկարներ՝ նպաստելու ապագայի մասնագիտության զարգացմանը և հաջողություններին։",
      id: "3",
    },
  ],
  companies: {
    title: "Դասընթացավարներ՝ միայն առաջատար ՏՏ ընկերություններից",
    companies: [
      {
        id: "1",
        href: "https://picsart.com/",
        image: {
          src: "/images/courses/companies-logos/picsart2.svg",
          alt: "Picsart",
          style: "max-height: 28px !important",
        },
      },
      {
        id: "2",
        href: "https://www.digitain.com/",
        image: {
          src: "/images/courses/companies-logos/stdev2.svg",
          alt: "STDev",
          style:
            "filter: invert(0) !important; max-հeight: 38px !important; height: 38px !important",
        },
      },
      {
        id: "3",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/betconstruct2.svg",
          alt: "BetConstruct",
          style: "",
        },
      },
      {
        id: "4",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/vmware2.svg",
          alt: "VMware",
          style: "max-height: 21px",
        },
      },
      {
        id: "5",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/epam2.svg",
          alt: "Epam",
          style: "",
        },
      },
      {
        id: "6",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/synposys2.svg",
          alt: "Synopsys",
          style: "",
        },
      },
      {
        id: "7",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/10web2.svg",
          alt: "10web",
          style: " max-height: 37px; height: 37px ",
        },
      },
      {
        id: "8",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/iunetworks2.svg",
          alt: "IUnetworks",
          style: " max-height: 35px; height: 35px ",
        },
      },
      {
        id: "9",
        href: "#",
        image: {
          src: "/images/courses/companies-logos/synergy2.svg",
          alt: "Synergy",
          style: "",
        },
      },
    ],
  },
  video: {
    articles: [
      {
        id: "1",
        title: "Ստեղծարարություն",
        description:
          "Խնդիրները նոր հնարավորությունների վերածելու ճկունություն և ստեղծագործ մոտեցումների կիրառման էկոհամակարգ։",
      },
      {
        id: "2",
        title: "Թիմային աշխատանք",
        description:
          "Մենք խրախուսում ենք թիմային աշխատանքը՝ օգտագործելով ՏՏ ոլորտի ժամանակակից տեխնոլոգիաները, ինչպես օրինակ Slack-ը և GitHub-ը",
      },
      {
        id: "3",
        title: "Քաղաքի սրտում",
        description:
          "Այո, այո, գտնվում ենք քաղաքի սրտում՝ Աբովյան-Իսահակյան փողոցների խաչմերուկում՝ Երիտասարդական մետրոկայանի հարևանությամբ։",
      },
    ],
    video: {
      src: "/video/1.mp4",
      poster: "/images/background/poster.png",
    },
  },
  experiences: [
    {
      id: "1",
      title: "տարի",
      number: 5,
      className: "year",
    },
    {
      id: "2",
      title: "շրջանավարտ",
      number: 1500,
      className: "graduate",
    },
    {
      id: "3",
      title: "անցկացրած դաս",
      number: 50000,
      className: "hours",
    },
  ],
  feedbacks: {
    feedbacks: [
      {
        id: "1",
        image: {
          src:
            "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/70704061_2461055944117113_127480985896878080_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_oc=AQnbCH6738UWB19qXsQnQy7pMWkMlVGcSwDGyZdneogogsXNhI0div2tK-FmTWHZtUw&_nc_ht=scontent.fevn1-4.fna&oh=59c8c136f8474fac369ae5a85afe585f&oe=5EBD85BA",
          alt: "",
        },
        fullName: "Լիանա Բաղիյան",
        feedback:
          "Հաճելի անձնակազմ ու բարձր մակարդակ: Էն որ իրանք գիտեն, ոնց մատուցել նյութը: Ու առաջացած հարցերին պատասխանում են ոչ միայն դասի ժամանակ, այլ կոնտակտի մեջ կարող ես լինել ցանկացած ժամի: Ուրախ եմ, որ ընտրել եմ ձեզ:️",
      },
      {
        id: "2",
        image: {
          src:
            "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/69530125_2491024094452896_1802679000552701952_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_oc=AQlsckvOP6PJmfwTGCqRd1KDDDfk5g9stU-Dz3FiBqqbWk7EAxFrjfGzha-W-9PU12Q&_nc_ht=scontent.fevn1-4.fna&oh=6fdd0c4a1eac9ece9c95568ce84c8227&oe=5EBF4A06",
          alt: "",
        },
        fullName: "Վարդգես Կարապետյան",
        feedback:
          "Basic IT Center-ում սկսում ես սիրել ծրագրավորումը, շատ լավ մթնոլորտ, լավ դասախոսներ...այցելեք, չեք փոշմանի ♥️",
      },
      {
        id: "3",
        image: {
          src:
            "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/p843x403/83119223_2475755902698274_4678114301909663744_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_oc=AQkgDM9Gu4lr4cFWHacEJ94dhdHH8IDYMIsSVNjvn8uGpsJzic0uTV7XdAX5HeSl9kk&_nc_ht=scontent.fevn1-4.fna&_nc_tp=6&oh=bfae04d23a6f8f5b734557e7d76755db&oe=5EC039F5",
          alt: "",
        },
        fullName: "Վահե Բագրատյան",
        feedback:
          "Ես հաճախում եմ Basic IT Center շատ գոհեմ, տալիս են որակյալ գիտելիք, անհատական մոտեցում յուրաքանչյուր ուսանողի նկատմամբ: Շնորհակալություն:",
      },
      {
        id: "4",
        image: {
          src:
            "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/42563721_1366207823509290_4222843490746236928_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_oc=AQn3DLa-iBhgUNHC9SQh1uykEN-lyQe28laZ7WDWIeNOMLjlHOauzhdREWq3YnzFgQc&_nc_ht=scontent.fevn1-4.fna&oh=9d2b541c9688906a6c19afa3889c3c6d&oe=5EBCC232",
          alt: "",
        },
        fullName: "Վարդան Մանուկյան",
        feedback:
          "Լավ կազմակերպված ծրագիր, հաճելի անձնակազմ, դասախոսներից շատ գոհ եմ 👍👍👍",
      },
      {
        id: "5",
        image: {
          src:
            "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/67627702_875361602842934_5685281774884618240_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_oc=AQlX4_vltJ13lNHulmgaomOIt2xVGNI9ZsmNxR9kRYyBbud0buxCgpXCNZtCj97EaY0&_nc_ht=scontent.fevn1-4.fna&oh=ec22956b4e7ba346e8e9a26575fa2420&oe=5EBE49E7",
          alt: "",
        },
        fullName: "Տարոն Վարդանյան",
        feedback:
          "Բանիմաց և հաճելի անձնակազմ,ուսման համար լավ մշակված ծրագրերով!!!",
      },
    ],
    button: {
      text: "Այլ կարծիքներ Facebook-ում",
      href: "https://www.facebook.com/basic.it.center/reviews",
    },
    icon: {
      src: "https://image.flaticon.com/icons/svg/1029/1029183.svg",
      alt: "",
    },
  },
  blog: {
    title: "Basic Blog",
    blogs: [
      {
        id: "1",
        image: {
          alt: "",
          src: "/images/blog/1.png",
        },
        title: "Համակարգչային վիրուսներ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis culpa distinctio dolor doloribus ducimus explicabo facilis illum ipsam maiores nam possimus quae quas saepe sed, suscipit velit. Eos, reiciendis.",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
      {
        id: "2",
        image: {
          alt: "",
          src: "/images/blog/2.png",
        },
        title: "Միֆեր վեբ դիզայնի մասին",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis culpa distinctio dolor doloribus ducimus explicabo facilis illum ipsam maiores nam possimus quae quas saepe sed, suscipit velit. Eos, reiciendis.",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
      {
        id: "3",
        image: {
          alt: "",
          src: "/images/blog/3.png",
        },
        title: "Լավագույն ֆիլմերը IT-ի մասին",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis culpa distinctio dolor doloribus ducimus explicabo facilis illum ipsam maiores nam possimus quae quas saepe sed, suscipit velit. Eos, reiciendis.",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
      {
        id: "4",
        image: {
          alt: "",
          src: "/images/blog/4.png",
        },
        title: "Սերիալներ ծրագրավորման մասին",
        description:
          "Նշված սերիալներից յուրաքանչյուրը ներկայացնում է զանազան իրողություններ և բացահայտումներ ծրագրավորման աշխարհից, որոնք կգրավեն բոլոր կինոմաններին",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
      {
        id: "5",
        image: {
          alt: "",
          src: "/images/blog/5.png",
        },
        title: "HR և IT Recruitment-ի տարբերությունները",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis culpa distinctio dolor doloribus ducimus explicabo facilis illum ipsam maiores nam possimus quae quas saepe sed, suscipit velit. Eos, reiciendis.",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
      {
        id: "6",
        image: {
          alt: "",
          src: "/images/blog/6.png",
        },
        title: "Օնլայն դասընթաց. առավելություններ և թերություններ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis culpa distinctio dolor doloribus ducimus explicabo facilis illum ipsam maiores nam possimus quae quas saepe sed, suscipit velit. Eos, reiciendis.",
        readMore: {
          text: "Կարդալ ամբողջը",
          href: "",
        },
      },
    ],
    all: {
      href: "",
      text: "Բլոգի բոլոր հոդվածները",
    },
  },
};

export const layout = {
  header: {
    tabs: [
      {
        id: "1",
        tab: "/courses",
        name: "Դասընթացներ",
      },
      {
        id: "2",
        tab: "/contacts",
        name: "Կոնտակտներ",
      },
    ],
    flags: [
      {
        id: "1",
        src: "/images/icons/language/hy.svg",
        alt: "Hy",
      },
      {
        id: "2",
        src: "/images/icons/language/en.svg",
        alt: "En",
      },
    ],
  },
  footer: {},
};

export const course = {
  id: "14",
  name: "UI/UX դիզայն",
  description: "Նախագծի՛ր կայքերի և հավելվածների կառուցվածքը",
  filter: "pro",
  href: "ui-ux",
  image: {
    src: "ui-ux.svg",
    alt: "UI/UX",
  },
  gradient: "linear-gradient(145deg, #db295c, #f7d01b)",
  landing: {
    name: "UI/UX Design",
    fullName: "UI/UX Design կուրս",
    fullDescription:
      "Միասին բացահայտենք վեբ դիզայնի աշխարհը: User Interface (UI) և User Experience (UX) դիզայնը վերջին տարիներին վեբ մոբայլ ծրագրավորմանը զուգընթաց լայն տարածում գտած և շուկայում մեծ պահանջարկ վայելող մասնագիտություն է, որի շնորհիվ հնարավոր է իրականություն դարձնել կայքերի և հավելվածների արտաքին տեսքի հետ առնչվող յուրօրինակ և անհավանական գաղափարները՝ ավելի դյուրին դարձնելով վերջիններիս օգտագործման ընթացքը։",
    signUp: {
      href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
      title: "Գրանցվել",
    },
  },
  benefits: [
    {
      id: "1",
      image: {
        src: "1.svg",
        alt: "Ուսուցման լավագույն մեթոդները",
        title: "Ուսուցման լավագույն մեթոդները",
      },
      title: "Ուսուցման լավագույն մեթոդները",
      description: "Վերանայվել է ավելի քան 100 շրջանավարտների կողմից",
    },
    {
      id: "2",
      image: {
        src: "2.svg",
        alt: "Ստուգված դասընթաց",
        title: "Ստուգված դասընթաց",
      },
      title: "Ստուգված դասընթաց",
      description:
        "Համապատասխան մեթոդաբանություն հայկական առաջատար ՏՏ ընկերությունների կողմից",
    },
    {
      id: "3",
      image: {
        src: "3.svg",
        alt: "Ներառված պորտֆոլիո",
        title: "Ներառված պորտֆոլիո",
      },
      title: "Ներառված պորտֆոլիո",
      description: "Դասընթացի ավարտին մի քանի իրական նախագծեր",
    },
    {
      id: "4",
      image: {
        src: "4.svg",
        alt: "Վկայականի հիման վրա",
        title: "Վկայականի հիման վրա",
      },
      title: "Վկայականի հիման վրա",
      description: "Լավագույն շրջանավարտներին տրված վկայականներ",
    },
  ],
  discounts: {
    title: "Ուսումնասիրեք դժվար, սովորեք անվճար:",
    articles: [
      {
        id: "1",
        percentage: "50%",
        description: "* Զեղչ, եթե հաշիվը միջեւ 4,4-ից մինչեւ 4,7",
        dataAosDelay: "550",
      },
      {
        id: "2",
        percentage: "100%",
        description: "* Զեղչ, եթե հաշիվը միջեւ 4.8-ից մինչեւ 5",
        dataAosDelay: "450",
      },
      {
        id: "3",
        percentage: "30%",
        description: "* Զեղչ, եթե հաշիվը միջեւ 4-ից մինչեւ 4.3",
        dataAosDelay: "650",
      },
    ],
  },
  instructors: {
    title: "Դասընթացավարներ լավագույն ընկերություններից",
    peoples: [
      {
        id: "1",
        image: {
          src: "kristina.webp",
          alt: "Քրիստինա Հովսեփյան",
          title: "Քրիստինա Հովսեփյան",
        },
        href: "#",
        title: "Քրիստինա Հովսեփյան",
        description: "UI/UX դիզայներ PicsArt-ում",
      },
      {
        id: "2",
        image: {
          src: "lilit.webp",
          alt: "Լիլիթ Գրիգորյան",
          title: "Լիլիթ Գրիգորյան",
        },
        href: "#",
        title: "Լիլիթ Գրիգորյան",
        description: "UI/UX դիզայներ Digitain-ում",
      },
      {
        id: "3",
        image: {
          src: "zaruhi.webp",
          alt: "Զարուհի Քերոբյան",
          title: "Զարուհի Քերոբյան",
        },
        href: "#",
        title: "Զարուհի Քերոբյան",
        description: "UI/UX դիզայներ 10Web.io-ում",
      },
    ],
  },
  whoCanAttend: {
    title: "Դասընթացը հենց քեզ համար է, եթե",
    texts: [
      {
        id: "1",
        title: "ցանկանում ես իրականություն դարձնել գաղափարներդ",
      },
      {
        id: "2",
        title: "ունես ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ",
      },
      {
        id: "3",
        title: "պատրաստ ես ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր",
      },
    ],
  },
  information: {
    texts: [
      {
        id: "1",
        title: "Տևողությունը՝ 3 ամիս",
      },
      {
        id: "2",
        title: "Գինը՝ 45.000 դրամ/ամիս",
      },
      {
        id: "3",
        title: "Ընդունման վերջնաժամկետ՝ 1/5/2020",
      },
    ],
  },
  opportunities: {
    title: "Դասընթացի ավարտից հետո կկարողանաս",
    articles: [
      {
        id: "1",
        title: "նախագծել կայքերի և հավելվածների կառուցվածքը",
        image: {
          src: "5.svg",
          alt: "Websites and Applications",
        },
        style: "",
      },
      {
        id: "2",
        title: "հմտորեն աշխատել Adobe XD ծրագրով",
        image: {
          src: "6.svg",
          alt: "Adobe XD",
        },
        style: "filter: drop-shadow(0px 0px 25px #582b4999)",
      },
      {
        id: "3",
        title: "Կիրառել ձեր գիտելիքները իրական նախագծերում",

        image: {
          src: "7.svg",
          alt: "Real Rroject",
        },
        style: "",
      },
      {
        id: "4",
        title:
          "աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ",
        image: {
          src: "8.svg",
          alt: "Designer",
        },
        style: "",
      },
    ],
  },
  syllabus: {
    title: "Ի՞նչ եք սովորելու",
    sections: [
      {
        id: "1",
        title: "Փուլ 1",
        list: [
          { id: "1", title: "General Information about Design" },
          { id: "2", title: "What is Web Design" },
          { id: "3", title: "What is UI/UX Design" },
          { id: "4", title: "Steps to create Product Design" },
          { id: "5", title: "Adobe XD Introduction" },
          { id: "6", title: "What User Flows are" },
          { id: "7", title: "What is user Journey Map" },
          { id: "8", title: "Using Whimsical" },
          { id: "9", title: "Making User Map" },
          { id: "10", title: "What is Wireframing" },
          { id: "11", title: "Grid Systems" },
          { id: "12", title: "Grid Systems" },
          { id: "13", title: "Website Structure" },
          { id: "14", title: "Responsive Design" },
          { id: "15", title: "Responsive Design" },
          { id: "16", title: "Adaptive Design" },
          { id: "17", title: "Creating Wireframes" },
          { id: "18", title: "Working on projects" },
          { id: "19", title: "Understanding UI Design Style" },
          { id: "20", title: "Sizes and spacings on Web" },
          {
            id: "21",
            title: "General Information about Elements in Web sites",
          },
          { id: "22", title: "Adobe Illustrator short introduction" },
          { id: "23", title: "Adobe Photoshop short introduction" },
          { id: "24", title: "What is Typography" },
          { id: "25", title: "Typography standards on the web" },
          { id: "26", title: "What is UI KIT" },
          { id: "27", title: "Creating students projects UI KIT" },
          { id: "28", title: "What is Material Design" },
          { id: "29", title: "What is Human Interface Guidelines" },
          { id: "30", title: "What is Fluent Design" },
          { id: "31", title: "Creating UI/UX Designer CV" },
          { id: "32", title: "Creating UI/UX Designer Portfolio" },
          { id: "33", title: "Theoretical and Practical Testing" },
        ],
      },
      {
        id: "2",
        title: "Փուլ 2",
        list: [
          { id: "1", title: "General Information about Design" },
          { id: "2", title: "What is Web Design" },
          { id: "3", title: "What is UI/UX Design" },
          { id: "4", title: "Steps to create Product Design" },
          { id: "5", title: "Adobe XD Introduction" },
          { id: "6", title: "What User Flows are" },
          { id: "7", title: "What is user Journey Map" },
          { id: "8", title: "Using Whimsical" },
        ],
      },
    ],
    link: {
      href: "https://forms.gle/C9n7E5H8GnQ1iDsW6",
      text: "Գրանցվել հիմա",
    },
  },
  video: {
    title: "Դեռ հարցեր ունե՞ք: Եկեք դիտենք սա:",
    href: "https://www.youtube.com/embed/28H9RTlmUZM",
  },
};
