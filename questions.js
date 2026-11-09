const QUESTION_BANK = [

  // ============================================
  // CHM 101 — QUANTUM THEORY, QUANTUM NUMBERS,
  // PAULI, AUFBAU AND HUND'S PRINCIPLES
  // QUESTIONS 1–15
  // ============================================

  {
    subject: "CHM 101",
    question: "Which of the following best describes the principal quantum number (n)?",
    options: [
      "It determines the orientation of an orbital",
      "It determines the main energy level or shell occupied by an electron",
      "It determines the spin of an electron",
      "It determines the shape of an orbital"
    ],
    answer: 1,
    explanation: "The principal quantum number n identifies the main energy level or shell in which an electron is located. Its values are 1, 2, 3, 4, and so on."
  },

  {
    subject: "CHM 101",
    question: "What are the possible values of the principal quantum number n?",
    options: [
      "0, 1, 2, 3, ...",
      "1, 2, 3, 4, ...",
      "−1, 0, +1",
      "1/2, 1, 3/2, ..."
    ],
    answer: 1,
    explanation: "The principal quantum number can only have positive integer values: n = 1, 2, 3, 4, ..."
  },

  {
    subject: "CHM 101",
    question: "Which quantum number describes the shape of an atomic orbital?",
    options: [
      "Principal quantum number",
      "Magnetic quantum number",
      "Spin quantum number",
      "Azimuthal quantum number"
    ],
    answer: 3,
    explanation: "The azimuthal or angular momentum quantum number (l) determines the subshell and therefore the shape of the orbital."
  },

  {
    subject: "CHM 101",
    question: "For a principal quantum number n = 3, what are the possible values of the azimuthal quantum number l?",
    options: [
      "0, 1",
      "1, 2, 3",
      "0, 1, 2",
      "−3, −2, −1, 0, +1, +2, +3"
    ],
    answer: 2,
    explanation: "For a given n, l can have values from 0 to n − 1. Therefore, when n = 3, l = 0, 1, or 2."
  },

  {
    subject: "CHM 101",
    question: "Which value of the azimuthal quantum number corresponds to an s-subshell?",
    options: [
      "l = 0",
      "l = 1",
      "l = 2",
      "l = 3"
    ],
    answer: 0,
    explanation: "The subshells are represented by l = 0 for s, l = 1 for p, l = 2 for d, and l = 3 for f."
  },

  {
    subject: "CHM 101",
    question: "Which value of the azimuthal quantum number corresponds to a p-subshell?",
    options: [
      "l = 0",
      "l = 1",
      "l = 2",
      "l = 3"
    ],
    answer: 1,
    explanation: "A p-subshell has l = 1. The s, p, d and f subshells correspond to l values 0, 1, 2 and 3 respectively."
  },

  {
    subject: "CHM 101",
    question: "Which quantum number specifies the orientation of an orbital in space?",
    options: [
      "Principal quantum number",
      "Azimuthal quantum number",
      "Magnetic quantum number",
      "Spin quantum number"
    ],
    answer: 2,
    explanation: "The magnetic quantum number (mₗ) specifies the orientation of an orbital within a subshell."
  },

  {
    subject: "CHM 101",
    question: "How many orbitals are present in a p-subshell?",
    options: [
      "1",
      "2",
      "3",
      "5"
    ],
    answer: 2,
    explanation: "A p-subshell contains three orbitals, corresponding to mₗ = −1, 0 and +1."
  },

  {
    subject: "CHM 101",
    question: "What is the maximum number of electrons that can occupy a single orbital?",
    options: [
      "1",
      "2",
      "4",
      "6"
    ],
    answer: 1,
    explanation: "According to the Pauli exclusion principle, an orbital can contain a maximum of two electrons, and they must have opposite spins."
  },

  {
    subject: "CHM 101",
    question: "Which principle states that no two electrons in an atom can have the same set of four quantum numbers?",
    options: [
      "Aufbau principle",
      "Hund's rule",
      "Pauli exclusion principle",
      "Heisenberg principle"
    ],
    answer: 2,
    explanation: "The Pauli exclusion principle states that no two electrons in the same atom can possess identical values for all four quantum numbers."
  },

  {
    subject: "CHM 101",
    question: "According to the Aufbau principle, electrons occupy orbitals in order of:",
    options: [
      "Increasing atomic mass",
      "Increasing energy",
      "Decreasing nuclear charge",
      "Increasing number of neutrons"
    ],
    answer: 1,
    explanation: "The Aufbau principle states that electrons fill available orbitals starting from the lowest energy orbital to higher energy orbitals."
  },

  {
    subject: "CHM 101",
    question: "Which of the following represents the correct order of orbital filling?",
    options: [
      "1s, 2s, 2p, 3s, 3p",
      "1s, 2p, 2s, 3p, 3s",
      "1s, 3s, 2s, 2p, 3p",
      "2s, 1s, 2p, 3s, 3p"
    ],
    answer: 0,
    explanation: "The orbitals fill in increasing energy order: 1s → 2s → 2p → 3s → 3p, following the Aufbau principle."
  },

  {
    subject: "CHM 101",
    question: "Hund's rule states that electrons occupy degenerate orbitals by:",
    options: [
      "Pairing immediately in the first orbital",
      "Occupying singly with parallel spins before pairing",
      "Entering the highest-energy orbital first",
      "Having opposite spins in separate orbitals"
    ],
    answer: 1,
    explanation: "Hund's rule states that electrons occupy orbitals of equal energy singly with parallel spins before pairing occurs."
  },

  {
    subject: "CHM 101",
    question: "What is the maximum number of electrons that can occupy the third shell (n = 3)?",
    options: [
      "8",
      "18",
      "32",
      "9"
    ],
    answer: 1,
    explanation: "The maximum number of electrons in a shell is given by 2n². For n = 3: 2(3²) = 18 electrons."
  },

  {
    subject: "CHM 101",
    question: "Which of the following is the correct electronic configuration of nitrogen (Z = 7)?",
    options: [
      "1s² 2s² 2p³",
      "1s² 2s² 2p⁵",
      "1s² 2s¹ 2p⁴",
      "1s² 2p⁵"
    ],
    answer: 0,
    explanation: "Nitrogen has seven electrons. Filling according to the Aufbau principle gives 1s² 2s² 2p³."
  },


  // ============================================
  // PHY 101 — VECTOR MULTIPLICATION AND DOT PRODUCT
  // QUESTIONS 16–30
  // ============================================

  {
    subject: "PHY 101",
    question: "Which of the following is the correct expression for the scalar product of two vectors A and B?",
    options: [
      "A · B = AB sinθ",
      "A · B = AB cosθ",
      "A · B = A + B",
      "A · B = A/B"
    ],
    answer: 1,
    explanation: "The scalar or dot product is given by A · B = |A||B|cosθ, where θ is the angle between the vectors."
  },

  {
    subject: "PHY 101",
    question: "The result of the dot product of two vectors is:",
    options: [
      "Always a vector",
      "Always a scalar",
      "Always zero",
      "Always negative"
    ],
    answer: 1,
    explanation: "The dot product produces a scalar quantity."
  },

  {
    subject: "PHY 101",
    question: "If A = 3i + 4j and B = 2i + 5j, find A · B.",
    options: [
      "14",
      "20",
      "26",
      "29"
    ],
    answer: 2,
    explanation: "A · B = (3 × 2) + (4 × 5) = 6 + 20 = 26."
  },

  {
    subject: "PHY 101",
    question: "What is the dot product of two perpendicular vectors?",
    options: [
      "1",
      "−1",
      "Zero",
      "Their product"
    ],
    answer: 2,
    explanation: "For perpendicular vectors, θ = 90°. Therefore A · B = AB cos90° = 0."
  },

  {
    subject: "PHY 101",
    question: "Two vectors have magnitudes 5 and 8 and are inclined at 60°. What is their dot product?",
    options: [
      "20",
      "40",
      "13",
      "80"
    ],
    answer: 0,
    explanation: "A · B = AB cosθ = (5)(8)(cos60°) = 40 × 1/2 = 20."
  },

  {
    subject: "PHY 101",
    question: "If A · B = AB, what is the angle between A and B?",
    options: [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    answer: 0,
    explanation: "A · B = AB cosθ. If A · B = AB, then cosθ = 1, so θ = 0°."
  },

  {
    subject: "PHY 101",
    question: "If A · B = −AB, the angle between A and B is:",
    options: [
      "0°",
      "60°",
      "90°",
      "180°"
    ],
    answer: 3,
    explanation: "Since cosθ = −1, the angle between the vectors is 180°."
  },

  {
    subject: "PHY 101",
    question: "Which of the following is the correct expression for the vector product of A and B?",
    options: [
      "A × B = AB cosθ",
      "A × B = AB sinθ",
      "A × B = A + B",
      "A × B = A · B"
    ],
    answer: 1,
    explanation: "The magnitude of the vector or cross product is |A × B| = |A||B|sinθ."
  },

  {
    subject: "PHY 101",
    question: "The result of the cross product of two vectors is:",
    options: [
      "A scalar",
      "A vector",
      "A dimensionless number",
      "Always zero"
    ],
    answer: 1,
    explanation: "The cross product produces a vector that is perpendicular to both original vectors."
  },

  {
    subject: "PHY 101",
    question: "What is the magnitude of A × B when A and B are parallel?",
    options: [
      "AB",
      "A + B",
      "Zero",
      "A/B"
    ],
    answer: 2,
    explanation: "For parallel vectors, θ = 0° and sin0° = 0. Therefore |A × B| = AB sin0° = 0."
  },

  {
    subject: "PHY 101",
    question: "Two vectors have magnitudes 4 and 6 and are perpendicular. What is the magnitude of their cross product?",
    options: [
      "10",
      "24",
      "12",
      "0"
    ],
    answer: 1,
    explanation: "|A × B| = AB sin90° = (4)(6)(1) = 24."
  },

  {
    subject: "PHY 101",
    question: "If A = 2i and B = 3j, what is A · B?",
    options: [
      "6",
      "−6",
      "0",
      "5"
    ],
    answer: 2,
    explanation: "The i and j unit vectors are perpendicular. Therefore i · j = 0, so A · B = 0."
  },

  {
    subject: "PHY 101",
    question: "If A = 2i and B = 3j, what is A × B?",
    options: [
      "6i",
      "6j",
      "6k",
      "0"
    ],
    answer: 2,
    explanation: "A × B = (2i) × (3j) = 6(i × j). Since i × j = k, the answer is 6k."
  },

  {
    subject: "PHY 101",
    question: "Which of the following is equal to i × j?",
    options: [
      "i",
      "j",
      "k",
      "−k"
    ],
    answer: 2,
    explanation: "For the Cartesian unit vectors, i × j = k."
  },

  {
    subject: "PHY 101",
    question: "Which of the following is equal to j × i?",
    options: [
      "k",
      "−k",
      "i",
      "j"
    ],
    answer: 1,
    explanation: "The cross product is anti-commutative. Therefore j × i = −(i × j) = −k."
  },


  // ============================================
  // BIO 101 — TYPES OF TISSUES
  // EPITHELIAL, CONNECTIVE, MUSCLE AND NERVOUS
  // QUESTIONS 31–45
  // ============================================

  {
    subject: "BIO 101",
    question: "A tissue is best defined as:",
    options: [
      "A single specialized cell",
      "A group of similar cells performing a common function",
      "A group of organs performing different functions",
      "The fluid portion of the blood"
    ],
    answer: 1,
    explanation: "A tissue is a group of structurally and functionally similar cells organized to perform a particular function."
  },

  {
    subject: "BIO 101",
    question: "Which of the following is NOT one of the four basic types of animal tissue?",
    options: [
      "Epithelial tissue",
      "Connective tissue",
      "Muscle tissue",
      "Meristematic tissue"
    ],
    answer: 3,
    explanation: "The four basic animal tissues are epithelial, connective, muscle and nervous tissues. Meristematic tissue is a plant tissue."
  },

  {
    subject: "BIO 101",
    question: "Which tissue primarily covers body surfaces and lines internal cavities?",
    options: [
      "Connective tissue",
      "Epithelial tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],
    answer: 1,
    explanation: "Epithelial tissue forms coverings and linings of body surfaces and organs."
  },

  {
    subject: "BIO 101",
    question: "Which type of epithelial tissue is best suited for rapid diffusion?",
    options: [
      "Simple squamous epithelium",
      "Stratified cuboidal epithelium",
      "Stratified columnar epithelium",
      "Transitional epithelium"
    ],
    answer: 0,
    explanation: "Simple squamous epithelium consists of a single layer of thin cells and is well suited for rapid diffusion."
  },

  {
    subject: "BIO 101",
    question: "Which epithelial tissue is commonly associated with absorption and secretion?",
    options: [
      "Simple cuboidal epithelium",
      "Simple squamous epithelium",
      "Stratified squamous epithelium",
      "Transitional epithelium"
    ],
    answer: 0,
    explanation: "Simple cuboidal epithelium commonly performs absorption and secretion and is found in structures such as kidney tubules."
  },

  {
    subject: "BIO 101",
    question: "Which epithelial tissue is commonly found lining the trachea?",
    options: [
      "Simple squamous epithelium",
      "Ciliated pseudostratified columnar epithelium",
      "Simple cuboidal epithelium",
      "Transitional epithelium"
    ],
    answer: 1,
    explanation: "The respiratory tract, including much of the trachea, is lined by ciliated pseudostratified columnar epithelium."
  },

  {
    subject: "BIO 101",
    question: "Which of the following is a major function of connective tissue?",
    options: [
      "Conduction of nerve impulses only",
      "Support, binding and protection",
      "Production of voluntary movement only",
      "Secretion of digestive enzymes only"
    ],
    answer: 1,
    explanation: "Connective tissues support, bind, protect, store and transport materials throughout the body."
  },

  {
    subject: "BIO 101",
    question: "Which of the following is an example of connective tissue?",
    options: [
      "Blood",
      "Epidermis",
      "Skeletal muscle",
      "Nervous tissue"
    ],
    answer: 0,
    explanation: "Blood is classified as a connective tissue because its cells are suspended in an extracellular matrix called plasma."
  },

  {
    subject: "BIO 101",
    question: "Which connective tissue is specialized for storing energy?",
    options: [
      "Cartilage",
      "Adipose tissue",
      "Bone",
      "Blood"
    ],
    answer: 1,
    explanation: "Adipose tissue stores energy mainly in the form of triglycerides and also provides insulation and cushioning."
  },

  {
    subject: "BIO 101",
    question: "Which type of muscle tissue is under voluntary control?",
    options: [
      "Cardiac muscle",
      "Smooth muscle",
      "Skeletal muscle",
      "Visceral muscle"
    ],
    answer: 2,
    explanation: "Skeletal muscle is generally under voluntary control and is attached to bones to produce body movement."
  },

  {
    subject: "BIO 101",
    question: "Which type of muscle tissue is found exclusively in the heart?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Connective muscle"
    ],
    answer: 2,
    explanation: "Cardiac muscle forms the muscular wall of the heart and is specialized for rhythmic, involuntary contraction."
  },

  {
    subject: "BIO 101",
    question: "Which type of muscle tissue is found mainly in the walls of hollow internal organs?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Striated voluntary muscle"
    ],
    answer: 1,
    explanation: "Smooth muscle is found in the walls of many hollow organs, including the intestines and blood vessels."
  },

  {
    subject: "BIO 101",
    question: "The basic functional cell of nervous tissue is the:",
    options: [
      "Nephron",
      "Neuron",
      "Osteocyte",
      "Myocyte"
    ],
    answer: 1,
    explanation: "Neurons are specialized cells responsible for receiving, processing and transmitting electrical and chemical signals."
  },

  {
    subject: "BIO 101",
    question: "Which cells support, nourish and protect neurons?",
    options: [
      "Red blood cells",
      "Glial cells",
      "Platelets",
      "Adipocytes"
    ],
    answer: 1,
    explanation: "Glial cells, or neuroglia, support neurons by providing functions such as nourishment, protection, insulation and maintenance of the neural environment."
  },

  {
    subject: "BIO 101",
    question: "Which of the following tissues is primarily responsible for transmitting electrical impulses throughout the body?",
    options: [
      "Epithelial tissue",
      "Connective tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],
    answer: 3,
    explanation: "Nervous tissue is specialized for receiving, processing and transmitting electrical signals throughout the body."
  },


  // ============================================
  // MATH 101 — INDICES, EXPONENTS AND EQUATIONS
  // QUESTIONS 46–60
  // ============================================

  {
    subject: "MATH 101",
    question: "Simplify 2³ × 2⁴.",
    options: [
      "2⁷",
      "2¹²",
      "2¹",
      "4⁷"
    ],
    answer: 0,
    explanation: "When multiplying powers with the same base, add the indices: 2³ × 2⁴ = 2⁽³⁺⁴⁾ = 2⁷."
  },

  {
    subject: "MATH 101",
    question: "Simplify 5⁷ ÷ 5³.",
    options: [
      "5¹⁰",
      "5⁴",
      "5²¹",
      "5³"
    ],
    answer: 1,
    explanation: "When dividing powers with the same base, subtract the indices: 5⁷ ÷ 5³ = 5⁽⁷⁻³⁾ = 5⁴."
  },

  {
    subject: "MATH 101",
    question: "Simplify (3²)⁴.",
    options: [
      "3⁶",
      "3⁸",
      "3¹⁶",
      "3²"
    ],
    answer: 1,
    explanation: "When a power is raised to another power, multiply the indices: (3²)⁴ = 3⁽²×⁴⁾ = 3⁸."
  },

  {
    subject: "MATH 101",
    question: "Simplify x⁵ × x².",
    options: [
      "x³",
      "x⁷",
      "x¹⁰",
      "2x⁷"
    ],
    answer: 1,
    explanation: "For multiplication of powers with the same base, add the indices: x⁵ × x² = x⁷."
  },

  {
    subject: "MATH 101",
    question: "Simplify a⁸ ÷ a³.",
    options: [
      "a¹¹",
      "a⁵",
      "a²⁴",
      "a³"
    ],
    answer: 1,
    explanation: "For division of powers with the same base, subtract the indices: a⁸ ÷ a³ = a⁵."
  },

  {
    subject: "MATH 101",
    question: "Evaluate 16^(1/2).",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    answer: 1,
    explanation: "An exponent of 1/2 represents the square root. Therefore, 16^(1/2) = √16 = 4."
  },

  {
    subject: "MATH 101",
    question: "Evaluate 27^(1/3).",
    options: [
      "3",
      "6",
      "9",
      "27"
    ],
    answer: 0,
    explanation: "An exponent of 1/3 represents the cube root. Therefore, 27^(1/3) = ∛27 = 3."
  },

  {
    subject: "MATH 101",
    question: "Simplify x⁰, where x ≠ 0.",
    options: [
      "0",
      "1",
      "x",
      "−1"
    ],
    answer: 1,
    explanation: "Any non-zero quantity raised to the power of zero is equal to 1."
  },

  {
    subject: "MATH 101",
    question: "Simplify x⁻².",
    options: [
      "−x²",
      "1/x²",
      "x²",
      "2/x"
    ],
    answer: 1,
    explanation: "A negative index means the reciprocal: x⁻² = 1/x²."
  },

  {
    subject: "MATH 101",
    question: "Solve 2ˣ = 16.",
    options: [
      "x = 2",
      "x = 3",
      "x = 4",
      "x = 8"
    ],
    answer: 2,
    explanation: "Since 16 = 2⁴, comparing powers gives x = 4."
  },

  {
    subject: "MATH 101",
    question: "Solve 3ˣ = 27.",
    options: [
      "x = 2",
      "x = 3",
      "x = 6",
      "x = 9"
    ],
    answer: 1,
    explanation: "Since 27 = 3³, it follows that x = 3."
  },

  {
    subject: "MATH 101",
    question: "Solve 2x + 5 = 15.",
    options: [
      "x = 3",
      "x = 4",
      "x = 5",
      "x = 10"
    ],
    answer: 2,
    explanation: "Subtract 5 from both sides: 2x = 10. Dividing by 2 gives x = 5."
  },

  {
    subject: "MATH 101",
    question: "Solve 3x − 7 = 11.",
    options: [
      "x = 4",
      "x = 5",
      "x = 6",
      "x = 7"
    ],
    answer: 2,
    explanation: "Add 7 to both sides: 3x = 18. Divide by 3 to obtain x = 6."
  },

  {
    subject: "MATH 101",
    question: "Solve x² − 5x + 6 = 0.",
    options: [
      "x = 1 or 6",
      "x = 2 or 3",
      "x = −2 or −3",
      "x = 3 or 6"
    ],
    answer: 1,
    explanation: "Factorising gives (x − 2)(x − 3) = 0. Therefore, x = 2 or x = 3."
  },

  {
    subject: "MATH 101",
    question: "Which of the following is the standard form of a quadratic equation?",
    options: [
      "ax + b = 0",
      "ax² + bx + c = 0, a ≠ 0",
      "ax³ + bx² + c = 0",
      "ax + bx + c = 0"
    ],
    answer: 1,
    explanation: "The standard form of a quadratic equation is ax² + bx + c = 0, where a ≠ 0."
  }

];