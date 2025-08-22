// Medical Guides (pasted from text files)
const guides = {
    comprehensive: `Comprehensive Medical Guide\n\n
  1. First Aid & Emergency Care
  - Cuts & Wounds: Wash with clean water, apply antiseptic, cover with sterile gauze.
  - Burns: Cool under running water 10–15 min, avoid ice/oil.
  - Sprains & Strains: Rest, Ice, Compression, Elevation (RICE).
  - Fractures: Immobilize, seek immediate help.
  - Nosebleeds: Sit upright, pinch nose, avoid tilting back.
  
  2. Infections & Diseases
  - Bacterial: TB, Pneumonia, Typhoid → antibiotics (doctor only).
  - Viral: Influenza, Dengue, COVID-19 → supportive care.
  - Fungal: Ringworm, Candidiasis → antifungals.
  - Parasitic: Malaria, Worms → antiparasitics.
  
  3. Fever & Symptoms
  - Low-grade: rest, fluids, paracetamol.
  - High fever: tepid sponging, doctor consult.
  - Dengue: hydration, avoid aspirin.
  - Typhoid: needs antibiotics.
  
  4. Chronic Diseases
  - Diabetes: insulin, low sugar diet.
  - Hypertension: lifestyle + meds.
  - Asthma: inhalers.
  - Heart disease: low-fat diet, exercise.
  
  5. Surgery Care
  - Before: fasting, diagnosis.
  - After: pain management, antibiotics, physiotherapy.
  
  6. Preventive Healthcare
  - Wash hands, safe water, balanced diet, exercise, vaccination, avoid smoking/alcohol.
  
  ⚠️ Always seek a doctor for serious cases.`,
  
    ultimate: `Ultimate Medical Prevention & Recovery Guide\n\n
  1. General Prevention
  - Wash hands, balanced diet, exercise, 7–8 hr sleep, hydration, vaccination.
  
  2. Injury Care
  - Prevention: helmets, safe footwear.
  - Recovery: RICE, antiseptic, physiotherapy, calcium/vitamin C.
  
  3. Infections
  - Prevention: hygiene, safe food, vaccines.
  - Recovery: antibiotics (bacterial), supportive care (viral), antifungals, deworming.
  
  4. Diseases
  - Diabetes: strict diet, medication.
  - Hypertension: low salt, yoga, regular BP monitoring.
  - Asthma: inhalers, breathing exercises.
  - Heart disease: lifestyle management.
  - Malaria/Dengue: mosquito nets, hydration.
  - Tuberculosis: long antibiotics + nutrition.
  - Cancer: surgery, chemo, radiotherapy.
  
  5. Surgery Recovery
  - Pain management, wound care, protein diet, physiotherapy.
  
  6. Mental Health
  - Prevention: yoga, hobbies, sleep.
  - Recovery: therapy, support groups.
  
  7. Recovery Diet
  - Protein (eggs, lentils), Vit C (citrus), Iron (spinach), Zinc (nuts), Hydration.
  
  8. Special Situations
  - Pregnancy: folic acid, iron, no smoking/alcohol.
  - Children: immunization, safe environment.
  - Elderly: fall-proof home, physiotherapy.
  
  9. First Aid Quick List
  - CPR, Heimlich, stop bleeding, burns care, snake bite immobilization.
  
  ⚠️ Always seek professional medical advice for serious illness.`
  };
  
  // Function to load guide
  function loadContent(type) {
    const contentArea = document.getElementById("contentArea");
    contentArea.textContent = guides[type];
    contentArea.scrollTop = 0;
  }
  