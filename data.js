const products = [
    {
      name: "Breakout™ 117",
      price: 29650,
      description: "Le Harley-Davidson Breakout™ 117 (2024) est une moto cruiser audacieuse et puissante, équipée du moteur Milwaukee-Eight® 117 V-Twin de 1923 cm³, offrant un couple impressionnant et des performances exceptionnelles. Ce modèle incarne l'esprit custom américain avec son look musclé, ses lignes épurées et son réservoir de carburant plus grand. Avec ses roues chromées massives, une position de conduite allongée et un guidon relevé, la Breakout™ 117 combine puissance brute et élégance, idéale pour ceux qui recherchent une expérience de conduite intense sur route ouverte.",
      image: "IMG/produit1.jpg"
    },
    {
      name: "Fat Bob™ 114",
      price: 22290,
      description: "Le 2024 Harley-Davidson Fat Bob™ 114 est un cruiser puissant et audacieux, conçu pour les amateurs de sensations fortes et de style musclé. Équipé du moteur Milwaukee-Eight® 114, il offre un couple impressionnant pour une accélération rapide et un comportement dynamique. Son design agressif, avec des pneus larges et une double sortie d’échappement surélevée, se démarque sur la route. La Fat Bob™ 114 combine l’esthétique brute et moderne de Harley-Davidson avec des performances optimisées pour offrir une expérience de conduite unique, que ce soit en ville ou sur les routes ouvertes.",
      image: "IMG/produit2.jpg"
    },
    {
      name: "Fat Boy™ 114",
      price: 26350,
      description: "Le 2024 Harley-Davidson Fat Boy™ 114 est un cruiser iconique qui incarne la puissance et le style robuste. Équipé du moteur Milwaukee-Eight® 114, il offre une puissance exceptionnelle et un couple massif pour des performances impressionnantes sur la route. Son design distinctif se caractérise par des roues pleines en aluminium, une silhouette imposante et un cadre large. La Fat Boy™ est un modèle légendaire qui mêle tradition et modernité, avec un look musclé et des finitions chromées éclatantes, tout en offrant une conduite stable et confortable, idéale pour les longs trajets ou les virées urbaines.",
      image: "IMG/produit3.jpg"
    },
    {
        name: "Low Rider™ S",
        price: 22960,
        description: "La 2024 Harley-Davidson Low Rider™ S est un cruiser inspiré par le style West Coast, conçu pour offrir des performances agressives et un look audacieux. Propulsée par le puissant moteur Milwaukee-Eight® 117, la Low Rider™ S offre une accélération fulgurante et une maniabilité précise, parfaite pour les amateurs de sensations fortes. Son guidon relevé, ses suspensions améliorées, et ses finitions sombres lui donnent un caractère rebelle. Le design allie minimalisme et robustesse, avec une selle basse, des commandes centralisées, et un carénage distinctif. La Low Rider™ S est idéale pour ceux qui recherchent une expérience de conduite performante et une allure résolument custom.",
        image: "IMG/produit4.jpg"
      },
      {
        name: "Heritage Classic",
        price: 26990,
        description: "La 2024 Harley-Davidson Heritage Classic est un cruiser au style intemporel, combinant l’esthétique rétro des motos classiques avec des performances modernes. Équipée du moteur Milwaukee-Eight® 114, elle offre une conduite puissante et fluide, idéale pour les longs trajets. Ce modèle se distingue par ses sacoches rigides en cuir, ses nombreux accents chromés et son pare-brise amovible, ce qui en fait un choix polyvalent pour les balades en ville ou les road trips. Avec ses détails soignés, comme les phares à LED et les finitions vintage, la Heritage Classic incarne l’élégance classique de Harley-Davidson tout en offrant le confort et la technologie d'une moto moderne.",
        image: "IMG/produit5.jpg"
      },
      {
        name: "Hydra-Glide Revival",
        price: 34390,
        description: "La 2024 Harley-Davidson Hydra-Glide Revival est une réédition spéciale inspirée des motos classiques des années 1950, offrant une fusion parfaite entre l’héritage iconique de Harley-Davidson et la technologie moderne. Ce modèle fait partie de la série Icons Collection, célébrant le style emblématique de la marque. Dotée du moteur Milwaukee-Eight® 114, la Hydra-Glide Revival allie puissance et confort sur route, tout en gardant des éléments distinctifs comme le pare-brise large, les garde-boue enveloppants et la selle à suspension solo. Avec son design rétro qui évoque l'ère des premières grandes motos de tourisme, elle ravira les amateurs de style vintage et de collection.",
        image: "IMG/produit6.jpg"
      },
      {
        name: "Low Rider™ ST",
        price: 24590,
        description: "La 2024 Harley-Davidson Low Rider™ ST est un modèle dynamique qui combine performances élevées et style touring, conçu pour les pilotes à la recherche de longues virées avec un look agressif. Propulsée par le moteur puissant Milwaukee-Eight® 117, cette moto offre un couple impressionnant et une accélération remarquable. La Low Rider™ ST se distingue par son carénage monté sur fourche, ses sacoches rigides et son allure West Coast inspirée. Conçue pour allier confort et maniabilité, elle propose une position de conduite ergonomique, idéale pour les trajets longs, tout en conservant un look résolument custom. C’est une moto parfaite pour ceux qui veulent une machine performante avec une touche de style touring moderne.",
        image: "IMG/produit7.jpg"
      },
      {
        name: "Softail™ Standard",
        price: 17190,
        description: "La 2024 Harley-Davidson Softail™ Standard est une moto minimaliste, épurée, parfaite pour les amateurs de customisation. Conçue pour offrir un point de départ idéal pour les transformations personnalisées, la Softail™ Standard est équipée du moteur Milwaukee-Eight® 107, offrant un équilibre entre puissance et maniabilité. Son cadre Softail léger et rigide garantit une conduite réactive, tandis que sa suspension arrière dissimulée préserve l'esthétique classique des motos rigides.",
        image: "IMG/produit8.jpg"
      },
      {
        name: "Sport Glide™",
        price: 20290,
        description: "La Harley-Davidson Sport Glide™ 2024 allie le style classique d'un cruiser à des performances modernes. Elle est dotée d'un carénage amovible, offrant des options de conduite polyvalentes, que ce soit pour un look élégant en ville ou une protection contre le vent pour les trajets plus longs. Animée par le moteur Milwaukee-Eight® 107, elle délivre un couple robuste et une puissance fluide. La Sport Glide™ offre également une selle confortable, une suspension douce et une capacité de personnalisation aisée, ce qui en fait un choix idéal pour les motards en quête de style et de performance sur la route.",
        image:"IMG/produit9.jpg"
      },
      {
        name: "Street Bob™ 114",
        price: 17650,
        description: "La Harley-Davidson Street Bob™ 114 2024 incarne l'esprit du custom avec son design épuré et son caractère puissant. Équipée du moteur Milwaukee-Eight® 114, elle offre un couple impressionnant et une réactivité instantanée, idéale pour les balades en ville et sur route. Son cadre léger, ses roues à rayons et son style minimaliste mettent en valeur son allure audacieuse. Avec une suspension avant moderne et une selle basse, la Street Bob™ 114 assure un confort optimal tout en offrant une maniabilité agile. Ce modèle est parfait pour les motards qui recherchent une moto au style brut et à la performance exceptionnelle.",
        image: "IMG/produit10.jpg"
      },
      {
        name: "Ultra Limited™",
        price: 33950,
        description: "La Harley-Davidson Ultra Limited™ 2024 est la référence en matière de touring, offrant un mélange parfait de confort, de technologie et de performance. Dotée du moteur Milwaukee-Eight® 114, elle délivre une puissance robuste pour les longs trajets. Son carénage intégral et son pare-brise offrent une excellente protection contre le vent, tandis que les sièges confortables et les repose-pieds passagers permettent des heures de conduite agréable. La Ultra Limited™ est équipée de nombreuses fonctionnalités, notamment un système audio haut de gamme, un écran tactile avec navigation, et des dispositifs de sécurité avancés comme le système de freinage antiblocage (ABS) et le contrôle de traction. Avec son design élégant et ses nombreuses options de personnalisation, cette moto est idéale pour les passionnés de longues distances qui ne veulent pas sacrifier le style ni le confort sur la route.",
        image:"IMG/pdt11.webp"
      },
      {
        name: "Road Glide™ Limited",
        price: 33950,
        description: "La Harley-Davidson Road Glide™ Limited 2024 est conçue pour les amateurs de longues distances, alliant confort, technologie et style distinctif. Avec son carénage emblématique et ses phares à LED, elle offre une excellente protection contre le vent tout en garantissant une allure imposante sur la route.Animée par le moteur Milwaukee-Eight® 114, la Road Glide™ Limited propose une puissance et un couple exceptionnels pour des trajets sans effort. Elle est équipée d'une suspension à réglage électronique pour un confort optimal, même sur les routes les plus difficiles.Les caractéristiques modernes incluent un système audio haut de gamme, un écran tactile avec navigation intégrée, ainsi que des dispositifs de sécurité avancés tels que le freinage antiblocage (ABS) et le contrôle de traction. Avec son ample capacité de rangement et ses finitions soignées, la Road Glide™ Limited est parfaite pour ceux qui recherchent une expérience de conduite haut de gamme sur de longues distances.",
        image: "IMG/pdt12.webp"
      },
      
  ];
  