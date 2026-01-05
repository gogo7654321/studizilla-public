import type { CourseData } from '../course-data';

// This file contains the data for the AP® Art History course.

export const ap_art_historyData: CourseData = {
  id: 'ap_art_history',
  slug: 'ap-art-history',
  name: 'AP® Art History',
  description: `Explore a global history of art from prehistory to the present in AP Art History.  Develop your visual analysis skills and understanding of art's cultural and historical contexts, preparing you for the AP exam and potential college credit.`,
  icon: '/images/ap_art_history.svg',
  subject: 'Arts',
  abbreviations: [''],
  examDate: "2026-05-14T08:00:00",
  units: [
  {
    "title": "Unit 1: Global Prehistory (c. 30,000–500 BCE)",
    "description": "This unit explores the art and architecture of prehistoric cultures across the globe.",
    "examWeight": "4-6%"
  },
  {
    "title": "Unit 2: Ancient Mediterranean (c. 3500–300 BCE)",
    "description": "This unit examines the art and architecture of ancient civilizations in the Mediterranean region, including Mesopotamia, Egypt, Greece, and Rome.",
    "examWeight": "10-12%"
  },
  {
    "title": "Unit 3: Early Europe and Colonial Americas (c. 200–1750 CE)",
    "description": "This unit covers art and architecture from the early medieval period through the Baroque era in Europe and the colonial Americas.",
    "examWeight": "15-17%"
  },
  {
    "title": "Unit 4: Later Europe and Americas (c. 1750–1980 CE)",
    "description": "This unit explores art and architecture from the 18th century through the late 20th century in Europe and the Americas.",
    "examWeight": "15-17%"
  },
  {
    "title": "Unit 5: Indigenous Americas (c. 1000 BCE–1980 CE)",
    "description": "This unit investigates the art and architecture of indigenous cultures across the Americas.",
    "examWeight": "4-6%"
  },
  {
    "title": "Unit 6: Africa (c. 1100–1980 CE)",
    "description": "This unit delves into the art and architecture of various African cultures.",
    "examWeight": "5-7%"
  },
  {
    "title": "Unit 7: West and Central Asia (c. 500 BCE–1980 CE)",
    "description": "This unit examines the art and architecture of West and Central Asia, spanning various historical periods.",
    "examWeight": "7-9%"
  },
  {
    "title": "Unit 8: South, East, and Southeast Asia (c. 300 BCE–1980 CE)",
    "description": "This unit investigates the diverse art and architecture of South, East, and Southeast Asia.",
    "examWeight": "10-12%"
  },
  {
    "title": "Unit 9: The Pacific (c. 200–1980 CE)",
    "description": "This unit explores the art and architecture of the Pacific Islands.",
    "examWeight": "2-4%"
  },
  {
    "title": "Unit 10: Global Contemporary (1980 CE–Present)",
    "description": "This unit analyzes contemporary art and architecture from around the world.",
    "examWeight": "5-7%"
  }
],
  examWeights: {
  "Multiple Choice": 50,
  "Free Response": 50
}
};