import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import common from "../utils/common";

i18n
.use(initReactI18next)
.init({
    resources: {
    en: {
        translation: {
            "title": "Title",
            "descript" : "Description",
            "to": "to",
            "skill": "Skills",
            "hobby": "Hobbies",
            "language": "Languages",
            "about_me": "About Me",
            "work_experiences": "Work Experiences",
            "certificates": "Certificates",
            "education": "Education",
            "activities": "Activities",
            "projects": "Projects"
        }
    },
    ja: {
        translation: {         
            "title": "タイトル",
            "descript": "説明",
            "to": "へ",  
            "skill": "スキル",
            "hobby": "趣味",
            "language": "言語",
            "about_me": "自己紹介",
            "work_experiences": "職務経験",
            "certificates": "資格",
            "education": "学歴",
            "activities": "活動",
            "projects": "プロジェクト"
        }
    },
    vi: {
        translation: {
            "title": "Tiêu đề",
            "descript" : "Mô tả",
            "to": "đến", 
            "skill": "Kỹ năng",
            "hobby": "Sở thích",
            "language": "Ngôn ngữ",
            "about_me": "Giới thiệu",
            "work_experiences": "Kinh nghiệm làm việc",
            "certificates": "Chứng nhận",
            "education": "Học vấn",
            "activities": "Hoạt động",
            "projects": "Dự án"
        }
    },
    fr: {
        translation: {
            "title": "Titre",
            "descript": "Description",
            "to": "à",
            "skill": "Compétences",
            "hobby": "Loisirs",
            "language": "Langues",
            "about_me": "À propos de moi",
            "work_experiences": "Expériences professionnelles",
            "certificates": "Certificats",
            "education": "Éducation",
            "activities": "Activités",
            "projects": "Projets"
        }
    },
    kr: {
        translation: {
            "title": "제목",
            "descript": "설명",
            "to": "에게",
            "skill": "기술",
            "hobby": "취미",
            "language": "언어",
            "about_me": "자기소개",
            "work_experiences": "경력",
            "certificates": "자격증",
            "education": "학력",
            "activities": "활동",
            "projects": "프로젝트"
        }
    }
    },
    fallbackLng: common.GetLocal("lang"),
    interpolation: {
        escapeValue: false
    }
});

export default i18n;