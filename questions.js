
const QUESTION_BANK = [

  // ============================================
  // CHM 101 — ATOMS, MOLECULES AND INTERMOLECULAR FORCES
  // QUESTIONS 1–15
  // ============================================

  {
    subject: "CHM 101",
    question: "What is the smallest particle of an element that retains its chemical properties?",
    options: ["Molecule", "Atom", "Compound", "Ion"],
    answer: 1,
    explanation: "An atom is the smallest unit of an element that retains its chemical identity."
  },
  {
    subject: "CHM 101",
    question: "Which of the following particles has a negative electrical charge?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    answer: 2,
    explanation: "Electrons carry a negative charge, protons are positive, and neutrons are neutral."
  },
  {
    subject: "CHM 101",
    question: "The atomic number of an element is equal to its number of:",
    options: ["Neutrons", "Protons", "Protons and neutrons", "Electrons and neutrons"],
    answer: 1,
    explanation: "Atomic number is defined as the number of protons in the nucleus of an atom."
  },
  {
    subject: "CHM 101",
    question: "What is the mass number of an atom containing 11 protons and 12 neutrons?",
    options: ["11", "12", "23", "24"],
    answer: 2,
    explanation: "Mass number = number of protons + number of neutrons = 11 + 12 = 23."
  },
  {
    subject: "CHM 101",
    question: "Atoms of the same element having different numbers of neutrons are called:",
    options: ["Isobars", "Isotopes", "Ions", "Isomers"],
    answer: 1,
    explanation: "Isotopes have the same atomic number but different mass numbers because they contain different numbers of neutrons."
  },
  {
    subject: "CHM 101",
    question: "Which of the following is a diatomic molecule?",
    options: ["H₂O", "CO₂", "O₂", "NH₃"],
    answer: 2,
    explanation: "Oxygen gas exists naturally as O₂, a molecule containing two oxygen atoms."
  },
  {
    subject: "CHM 101",
    question: "What is the chemical formula of calcium chloride?",
    options: ["CaCl", "CaCl₂", "Ca₂Cl", "Ca₂Cl₂"],
    answer: 1,
    explanation: "Calcium forms Ca²⁺ ions while chlorine forms Cl⁻ ions. Two chloride ions are needed to balance one calcium ion."
  },
  {
    subject: "CHM 101",
    question: "Which type of chemical bond involves the transfer of electrons from one atom to another?",
    options: ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
    answer: 2,
    explanation: "An ionic bond forms through electron transfer, producing oppositely charged ions that attract each other."
  },
  {
    subject: "CHM 101",
    question: "A covalent bond is formed when atoms:",
    options: [
      "Transfer protons",
      "Share electrons",
      "Lose all their electrons",
      "Share neutrons"
    ],
    answer: 1,
    explanation: "Covalent bonding occurs when atoms share one or more pairs of electrons."
  },
  {
    subject: "CHM 101",
    question: "Which of the following molecules is polar?",
    options: ["CO₂", "CH₄", "H₂O", "O₂"],
    answer: 2,
    explanation: "Water has a bent molecular shape, so its bond dipoles do not cancel. This gives it a permanent dipole."
  },
  {
    subject: "CHM 101",
    question: "Which intermolecular force is primarily responsible for the unusually high boiling point of water?",
    options: [
      "London dispersion forces",
      "Hydrogen bonding",
      "Ionic bonding",
      "Metallic bonding"
    ],
    answer: 1,
    explanation: "Water molecules form strong hydrogen bonds with one another, requiring considerable energy to separate them."
  },
  {
    subject: "CHM 101",
    question: "Which intermolecular force is present in all atoms and molecules?",
    options: [
      "Hydrogen bonding",
      "Dipole-dipole interaction",
      "London dispersion forces",
      "Ionic attraction"
    ],
    answer: 2,
    explanation: "London dispersion forces arise from temporary fluctuations in electron distribution and occur in all atoms and molecules."
  },
  {
    subject: "CHM 101",
    question: "Which of the following substances can form hydrogen bonds between its molecules?",
    options: ["CH₄", "HCl", "NH₃", "CO₂"],
    answer: 2,
    explanation: "Ammonia contains N-H bonds and a lone pair on nitrogen, allowing hydrogen bonding between molecules."
  },
  {
    subject: "CHM 101",
    question: "Which intermolecular force exists between permanent polar molecules?",
    options: [
      "Dipole-dipole interaction",
      "Metallic bonding",
      "Covalent bonding",
      "Nuclear attraction"
    ],
    answer: 0,
    explanation: "Permanent dipoles attract one another through electrostatic interactions between their partially positive and partially negative ends."
  },
  {
    subject: "CHM 101",
    question: "Why does the boiling point of many substances increase as their intermolecular forces become stronger?",
    options: [
      "Their molecules become smaller.",
      "More energy is needed to separate their molecules.",
      "Their atoms lose their protons.",
      "Their molecular masses always decrease."
    ],
    answer: 1,
    explanation: "Stronger intermolecular attractions require more energy to overcome during boiling, generally resulting in higher boiling points."
  },


  // ============================================
  // PHY 101 — SCALARS, VECTORS AND MOTION
  // QUESTIONS 16–30
  // ============================================

  {
    subject: "PHY 101",
    question: "Which of the following is a scalar quantity?",
    options: ["Velocity", "Force", "Displacement", "Speed"],
    answer: 3,
    explanation: "Speed has magnitude only, while velocity, force and displacement have both magnitude and direction."
  },
  {
    subject: "PHY 101",
    question: "Which of the following is a vector quantity?",
    options: ["Mass", "Time", "Acceleration", "Temperature"],
    answer: 2,
    explanation: "Acceleration has both magnitude and direction, making it a vector quantity."
  },
  {
    subject: "PHY 101",
    question: "A student walks 3 m east and then 4 m west. What is the magnitude of the total displacement?",
    options: ["7 m", "4 m", "3 m", "1 m"],
    answer: 3,
    explanation: "Taking east as positive, displacement = 3 - 4 = -1 m. Its magnitude is 1 m, directed west."
  },
  {
    subject: "PHY 101",
    question: "What is the magnitude of a vector A = 3i + 4j?",
    options: ["3", "4", "5", "7"],
    answer: 2,
    explanation: "Magnitude = √(3² + 4²) = √25 = 5."
  },
  {
    subject: "PHY 101",
    question: "Which of the following represents a unit vector along the positive x-axis?",
    options: ["i", "j", "k", "2i"],
    answer: 0,
    explanation: "The unit vector i represents a vector of magnitude one along the positive x-axis."
  },
  {
    subject: "PHY 101",
    question: "If a vector A = 6i + 8j, what is its unit vector?",
    options: [
      "6i + 8j",
      "0.6i + 0.8j",
      "0.8i + 0.6j",
      "3i + 4j"
    ],
    answer: 1,
    explanation: "The magnitude is √(36 + 64) = 10. Dividing each component by 10 gives 0.6i + 0.8j."
  },
  {
    subject: "PHY 101",
    question: "Two vectors acting in the same direction have magnitudes 5 N and 7 N. What is their resultant magnitude?",
    options: ["2 N", "12 N", "35 N", "7 N"],
    answer: 1,
    explanation: "For vectors acting in the same direction, their magnitudes are added: 5 + 7 = 12 N."
  },
  {
    subject: "PHY 101",
    question: "What is the scalar product of two perpendicular vectors?",
    options: ["1", "Their magnitudes multiplied", "Zero", "Negative one"],
    answer: 2,
    explanation: "A · B = |A||B|cosθ. For perpendicular vectors, θ = 90° and cos90° = 0."
  },
  {
    subject: "PHY 101",
    question: "If A = 3i + 2j and B = 2i + 4j, find A · B.",
    options: ["10", "12", "14", "16"],
    answer: 2,
    explanation: "A · B = (3 × 2) + (2 × 4) = 6 + 8 = 14."
  },
  {
    subject: "PHY 101",
    question: "The vector product of two vectors produces which type of quantity?",
    options: [
      "A scalar quantity",
      "A vector quantity",
      "A dimensionless quantity",
      "A constant quantity"
    ],
    answer: 1,
    explanation: "The cross product produces a vector perpendicular to the plane containing the two original vectors."
  },
  {
    subject: "PHY 101",
    question: "What is the magnitude of the cross product of two vectors A and B?",
    options: [
      "|A||B|cosθ",
      "|A| + |B|",
      "|A||B|sinθ",
      "|A|/|B|"
    ],
    answer: 2,
    explanation: "The magnitude of the cross product is |A × B| = |A||B|sinθ."
  },
  {
    subject: "PHY 101",
    question: "A body moves with a displacement of 20 m in 4 seconds. What is its average velocity if the motion is in a straight line?",
    options: ["4 m/s", "5 m/s", "16 m/s", "80 m/s"],
    answer: 1,
    explanation: "Average velocity = displacement/time = 20/4 = 5 m/s."
  },
  {
    subject: "PHY 101",
    question: "The derivative of displacement with respect to time gives:",
    options: ["Acceleration", "Force", "Velocity", "Momentum"],
    answer: 2,
    explanation: "Velocity is the rate of change of displacement with respect to time: v = ds/dt."
  },
  {
    subject: "PHY 101",
    question: "If the displacement of a particle is given by s = 3t² + 2t, what is its velocity at t = 2 seconds?",
    options: ["8 m/s", "10 m/s", "12 m/s", "14 m/s"],
    answer: 3,
    explanation: "Velocity v = ds/dt = 6t + 2. At t = 2, v = 12 + 2 = 14 m/s."
  },
  {
    subject: "PHY 101",
    question: "If the velocity of a body is v = 4t + 3, what is its acceleration?",
    options: ["3 m/s²", "4 m/s²", "4t m/s²", "7 m/s²"],
    answer: 1,
    explanation: "Acceleration a = dv/dt. Differentiating 4t + 3 gives a constant acceleration of 4 m/s²."
  },


  // ============================================
  // BIO 101 — CELL BIOLOGY
  // QUESTIONS 31–45
  // ============================================

  {
    subject: "BIO 101",
    question: "Which organelle is commonly described as the powerhouse of the cell?",
    options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"],
    answer: 1,
    explanation: "Mitochondria produce most of the ATP used to power many cellular activities."
  },
  {
    subject: "BIO 101",
    question: "Which organelle is responsible for protein synthesis?",
    options: ["Ribosome", "Lysosome", "Vacuole", "Centrosome"],
    answer: 0,
    explanation: "Ribosomes translate messenger RNA into polypeptide chains during protein synthesis."
  },
  {
    subject: "BIO 101",
    question: "Which structure controls the movement of substances into and out of the cell?",
    options: ["Nucleus", "Cell wall", "Plasma membrane", "Nucleolus"],
    answer: 2,
    explanation: "The plasma membrane is selectively permeable and regulates the exchange of materials between the cell and its environment."
  },
  {
    subject: "BIO 101",
    question: "Which organelle contains most of the genetic material in a eukaryotic cell?",
    options: ["Golgi apparatus", "Nucleus", "Ribosome", "Lysosome"],
    answer: 1,
    explanation: "The nucleus contains most of the cell's DNA and plays a major role in controlling cellular activities."
  },
  {
    subject: "BIO 101",
    question: "Which organelle is the main site of photosynthesis in plant cells?",
    options: ["Mitochondrion", "Chloroplast", "Vacuole", "Ribosome"],
    answer: 1,
    explanation: "Chloroplasts contain chlorophyll, which absorbs light energy used in photosynthesis."
  },
  {
    subject: "BIO 101",
    question: "Which structure is present in plant cells but generally absent in animal cells?",
    options: ["Plasma membrane", "Cytoplasm", "Cell wall", "Mitochondrion"],
    answer: 2,
    explanation: "Plant cells possess a cellulose cell wall outside their plasma membrane. Animal cells lack a cell wall."
  },
  {
    subject: "BIO 101",
    question: "What is the main function of the Golgi apparatus?",
    options: [
      "Producing ATP",
      "Modifying, sorting and packaging proteins",
      "Storing genetic information",
      "Digesting food particles"
    ],
    answer: 1,
    explanation: "The Golgi apparatus modifies, sorts and packages proteins and lipids into vesicles for transport."
  },
  {
    subject: "BIO 101",
    question: "Which organelle contains enzymes responsible for intracellular digestion?",
    options: ["Lysosome", "Ribosome", "Nucleolus", "Chloroplast"],
    answer: 0,
    explanation: "Lysosomes contain digestive enzymes that break down waste materials and worn-out cell components."
  },
  {
    subject: "BIO 101",
    question: "What is the main difference between prokaryotic and eukaryotic cells?",
    options: [
      "Prokaryotic cells have no DNA.",
      "Eukaryotic cells lack cytoplasm.",
      "Prokaryotic cells lack a membrane-bound nucleus.",
      "Eukaryotic cells have no plasma membrane."
    ],
    answer: 2,
    explanation: "Prokaryotic cells lack a membrane-bound nucleus. Their DNA is located in a region called the nucleoid."
  },
  {
    subject: "BIO 101",
    question: "What is the movement of water through a selectively permeable membrane called?",
    options: ["Diffusion", "Osmosis", "Active transport", "Exocytosis"],
    answer: 1,
    explanation: "Osmosis is the net movement of water across a selectively permeable membrane down its water-potential gradient."
  },
  {
    subject: "BIO 101",
    question: "Which process requires energy to move substances against their concentration gradient?",
    options: [
      "Simple diffusion",
      "Osmosis",
      "Active transport",
      "Facilitated diffusion"
    ],
    answer: 2,
    explanation: "Active transport uses energy to move substances against their concentration or electrochemical gradients."
  },
  {
    subject: "BIO 101",
    question: "Which part of the cell is commonly described as the site of aerobic cellular respiration?",
    options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Nucleus"],
    answer: 1,
    explanation: "The mitochondrion is the main site of the citric acid cycle and oxidative phosphorylation in eukaryotic cells."
  },
  {
    subject: "BIO 101",
    question: "Which structure helps maintain the shape and internal organisation of a cell?",
    options: ["Cytoskeleton", "Nucleolus", "Chromosome", "Nuclear pore"],
    answer: 0,
    explanation: "The cytoskeleton is a network of protein filaments that supports cell shape, organisation and movement."
  },
  {
    subject: "BIO 101",
    question: "What is the function of the nucleolus?",
    options: [
      "Production of ribosomal components",
      "Digestion of cellular waste",
      "Production of ATP",
      "Storage of lipids"
    ],
    answer: 0,
    explanation: "The nucleolus produces ribosomal RNA and assembles ribosomal subunits."
  },
  {
    subject: "BIO 101",
    question: "Which type of transport moves substances from a region of higher concentration to a region of lower concentration without using cellular energy?",
    options: [
      "Active transport",
      "Diffusion",
      "Endocytosis",
      "Exocytosis"
    ],
    answer: 1,
    explanation: "Diffusion is the net movement of particles down their concentration gradient and does not directly require metabolic energy."
  },


  // ============================================
  // MATH 101 — INDICES, LOGARITHMS AND EQUATIONS
  // QUESTIONS 46–60
  // ============================================

  {
    subject: "MATH 101",
    question: "Simplify 2³ × 2².",
    options: ["2⁵", "2⁶", "2¹", "2⁹"],
    answer: 0,
    explanation: "When multiplying powers with the same base, add the indices: 2³ × 2² = 2⁽³⁺²⁾ = 2⁵."
  },
  {
    subject: "MATH 101",
    question: "Simplify 5⁶ ÷ 5².",
    options: ["5⁸", "5⁴", "5³", "5¹²"],
    answer: 1,
    explanation: "When dividing powers with the same base, subtract the indices: 5⁶ ÷ 5² = 5⁽⁶⁻²⁾ = 5⁴."
  },
  {
    subject: "MATH 101",
    question: "Evaluate 3⁰.",
    options: ["0", "1", "3", "−1"],
    answer: 1,
    explanation: "Any non-zero number raised to the power of zero equals 1."
  },
  {
    subject: "MATH 101",
    question: "Simplify (2³)².",
    options: ["2⁵", "2⁶", "2⁹", "2¹"],
    answer: 1,
    explanation: "When raising a power to another power, multiply the indices: (2³)² = 2⁶."
  },
  {
    subject: "MATH 101",
    question: "Evaluate 16^(1/2).",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "A power of 1/2 represents the square root. Therefore, 16^(1/2) = √16 = 4."
  },
  {
    subject: "MATH 101",
    question: "Evaluate log₁₀ 1000.",
    options: ["1", "2", "3", "10"],
    answer: 2,
    explanation: "log₁₀ 1000 = 3 because 10³ = 1000."
  },
  {
    subject: "MATH 101",
    question: "If log₁₀ x = 2, find x.",
    options: ["10", "20", "100", "1000"],
    answer: 2,
    explanation: "Converting to exponential form gives x = 10² = 100."
  },
  {
    subject: "MATH 101",
    question: "Evaluate log₂ 8.",
    options: ["2", "3", "4", "8"],
    answer: 1,
    explanation: "log₂ 8 = 3 because 2³ = 8."
  },
  {
    subject: "MATH 101",
    question: "Solve the linear equation 3x + 5 = 20.",
    options: ["3", "5", "10", "15"],
    answer: 1,
    explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3 to obtain x = 5."
  },
  {
    subject: "MATH 101",
    question: "Solve 2x − 7 = 9.",
    options: ["1", "4", "8", "16"],
    answer: 2,
    explanation: "Add 7 to both sides: 2x = 16. Divide by 2 to obtain x = 8."
  },
  {
    subject: "MATH 101",
    question: "Find the value of x if 4x + 3 = 2x + 11.",
    options: ["2", "3", "4", "7"],
    answer: 2,
    explanation: "Collect like terms: 4x − 2x = 11 − 3. Therefore, 2x = 8 and x = 4."
  },
  {
    subject: "MATH 101",
    question: "Which of the following is the standard form of a quadratic equation?",
    options: [
      "ax + b = 0",
      "ax² + bx + c = 0, where a ≠ 0",
      "ax³ + bx² + c = 0",
      "ax² + b = 0, where a = 0"
    ],
    answer: 1,
    explanation: "A quadratic equation has the standard form ax² + bx + c = 0, where a is not zero."
  },
  {
    subject: "MATH 101",
    question: "Solve x² − 5x + 6 = 0.",
    options: [
      "x = 1 or x = 6",
      "x = 2 or x = 3",
      "x = −2 or x = −3",
      "x = 3 or x = 5"
    ],
    answer: 1,
    explanation: "Factorise: (x − 2)(x − 3) = 0. Therefore, x = 2 or x = 3."
  },
  {
    subject: "MATH 101",
    question: "Find the discriminant of x² − 4x + 4 = 0.",
    options: ["0", "4", "8", "16"],
    answer: 0,
    explanation: "Discriminant = b² − 4ac. Here a = 1, b = −4 and c = 4. Therefore, 16 − 16 = 0."
  },
  {
    subject: "MATH 101",
    question: "Solve x² − 9 = 0.",
    options: [
      "x = 3 only",
      "x = −3 only",
      "x = ±3",
      "x = ±9"
    ],
    answer: 2,
    explanation: "x² = 9. Taking both square roots gives x = 3 or x = −3."
  }

];
