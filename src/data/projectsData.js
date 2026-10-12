export const projectsData = [
  // ==========================================
  // 1. LEVEL DESIGN (CORE 5 PROJECTS)
  // ==========================================
  {
    id: 'devils-legacy',
    category: 'LEVEL DESIGN',
    title: "Devil's Legacy",
    caseTitle: "DEVIL'S LEGACY : THE FINAL DREAM MAZE",
    subtitle: 'Horror Labyrinth Blockout',
    badge: 'INDIE COLLAB',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'DL-Core Indie Studio',
    duration: '6 MONTHS (2025 - 2026)',
    youtubeId: 'ZBjVunuyMlU',
    thumbnail: 'https://img.youtube.com/vi/ZBjVunuyMlU/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'center 20%', transform: 'scale(1.22)' },
    gallery: ['/Data/pf/41.png', '/Data/pf/42.png', '/Data/pf/43.png'],
    summary:
      "Devil's Legacy is a psychological survival horror demo where tension and disorientation define the gameplay flow. As the level designer for the final dream sequence, my core goal was creating a claustrophobic corridor labyrinth leading into high-tension pursuit encounters.",
    subtext: "Collaborated closely with DL-Core to craft sightline breaks, narrative triggers, and psychological dead-ends.",
    section1Title: 'LABYRINTH PACING & DISORIENTATION DESIGN',
    section1Para: 'The sequence begins inside a circular rotunda anchor before channeling the player into deceptive 90-degree corridors.',
    highlights: [
      'Circular pillar rotunda serving as sequence focal anchor point.',
      'Claustrophobic corridor network calibrated for demonic chase speed and tight turn radii.',
      'Spatial routing aligned with the London Bridge music box audio trigger and fake staircase dead-end.',
      'Dynamic occlusion culling and light bounce placement using low-poly greybox proxy meshes.'
    ],
    section2Title: 'ITERATION & TENSION BALANCING',
    section2Para: 'Playtests showed players escaped too easily; introduced a false double-back hallway and increased pillar density.'
  },
  {
    id: 'as-the-stars-fall',
    category: 'LEVEL DESIGN',
    title: 'As The Stars Fall',
    caseTitle: 'AS THE STARS FALL : THE GREEN CITY URBAN LAYOUT',
    subtitle: 'Urban Environment Blockout',
    badge: 'INDIE COLLAB',
    engine: 'Blender / Unity',
    role: 'Environment & Level Designer',
    studio: 'Indie Collective',
    duration: '4 MONTHS (2025 - 2026)',
    youtubeId: 'jDYKchNn9Z4',
    thumbnail: 'https://img.youtube.com/vi/jDYKchNn9Z4/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left center', transform: 'scale(1.02)' },
    gallery: ['/Data/pf/51.png', '/Data/pf/52.png'],
    summary:
      'As The Stars Fall is a narrative adventure set within an overgrown metropolis. Greyboxed "The Green City" street grid with strict low-poly metrics, 0 N-gon topology, and unified texture atlas workflows.',
    subtext: 'Engineered exploration routes scaled for kid-sized character proportions (~100cm scale).',
    section1Title: 'URBAN PROPORTIONS & NAVIGATION READABILITY',
    section1Para: 'Curbs, doorways, and vehicle scaling were tuned to feel realistic while ensuring fluid mantle and jump clearances.',
    highlights: [
      'Street routes scaled specifically for ~100cm kid character movement controller.',
      'Landmark anchors placed at sightline intersections (Subway, Pharmacy, Bookstore).',
      'Unified 2K/4K texture atlas layout eliminating material overhead.',
      'Modular building facades built with snap-to-grid metric discipline in Blender.'
    ],
    section2Title: 'VISUAL DENSITY VS READABILITY',
    section2Para: 'Balanced street clutter to guide player routing naturally while keeping main thoroughfares unobstructed.'
  },
  {
    id: 'tactical-arena',
    category: 'LEVEL DESIGN',
    title: 'Tactical 6v6 Arena',
    caseTitle: 'TACTICAL 6v6 ARENA : COMPETITIVE FPS MAP LAYOUT',
    subtitle: 'Competitive FPS Map Blockout',
    badge: 'BLOCKOUT',
    engine: 'Unreal Engine',
    role: 'Level Designer',
    studio: 'Solo Project',
    duration: '3 MONTHS (2025)',
    youtubeId: '1w0CrGYUXGQ',
    thumbnail: 'https://img.youtube.com/vi/1w0CrGYUXGQ/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left center', transform: 'scale(0.94)' },
    gallery: ['/Data/pf/31.png', '/Data/pf/32.png', '/Data/pf/33.png', '/Data/pf/34.png', '/Data/pf/35.png'],
    summary:
      'A competitive 6v6 Capture-The-Flag arena blockout designed in Unreal Engine. Built around balanced lane timing, dual-tier verticality, and calculated cover staging.',
    subtext: 'Authored symmetrical route times from team spawn bases to contested neutral objectives with zero uncounterable headglitches.',
    section1Title: 'THREE-LANE STRUCTURE & COVER FORMATION',
    section1Para: 'Modified three-lane architecture with interconnected catwalks and modular container placements.',
    highlights: [
      'Dual-base symmetrical routing with balanced sprint timings to neutral mid-lane.',
      'Carefully staggered container placements eliminating excessive long-range sightlines.',
      'Upper-tier catwalk perches balanced with vulnerable side-flank approach vectors.',
      'Color-coded team zone visual guidance (Blue vs Red) for instant spatial orientation.'
    ],
    section2Title: 'COMBAT ENCOUNTER PACING',
    section2Para: 'Mid-map crate staging prevents offensive lockdown traps, ensuring defending teams always have two viable escape routes.'
  },
  {
    id: 'probuilder-showcase',
    category: 'LEVEL DESIGN',
    title: 'Citadel Blockout',
    caseTitle: 'CITADEL BLOCKOUT : PROBUILDER TO ENVIRONMENT ART',
    subtitle: 'ProBuilder vs Environment Art',
    badge: 'WORKFLOW',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'Pipeline Showcase',
    duration: '2 MONTHS (2025)',
    youtubeId: 'AVkL5OWZ72Y',
    thumbnail: 'https://img.youtube.com/vi/AVkL5OWZ72Y/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left 25%', transform: 'scale(1.2)' },
    gallery: ['/Data/pf/11.png', '/Data/pf/12.png', '/Data/pf/13.png', '/Data/pf/14.png', '/Data/pf/15.png'],
    summary:
      'An end-to-end level design pipeline demonstration showcasing rapid modular whitebox iteration in Unity ProBuilder transitioning into detailed medieval castle environment art.',
    subtext: 'Analyzes how player navigation landmarks, verticality, and readability are preserved through final art passes.',
    section1Title: 'GREYBOX PROTOTYPING & VOLUMETRIC SCALING',
    section1Para: 'Constructed natively in-engine using ProBuilder primitives to validate fortress walls, towers, and drawbridges.',
    highlights: [
      'Multi-level fortress blockout created natively inside Unity via ProBuilder.',
      'Verification of player flow readability before and after artistic dressing.',
      'Strategic bridge and parapet choke points designed for defensive standoffs.',
      'Sightline optimization preventing visual clutter from obstructing critical pathways.'
    ],
    section2Title: 'ART INTEGRATION VERIFICATION',
    section2Para: 'Showcased high-density environment meshes dressing whitebox hulls without breaking player mantle heights or collision hulls.'
  },
  {
    id: 'transformation-breakdown',
    category: 'LEVEL DESIGN',
    title: 'Urban Transformation',
    caseTitle: 'URBAN TRANSFORMATION : WHITEBOX TO FINAL CITYSCAPE',
    subtitle: 'Before & After Environment',
    badge: 'ITERATION',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'ThroneLeaf Games',
    duration: '5 MONTHS (2025 - 2026)',
    youtubeId: 'PzTLNUuptOg',
    thumbnail: 'https://img.youtube.com/vi/PzTLNUuptOg/maxresdefault.jpg',
    thumbStyle: { objectPosition: '18% center', transform: 'scale(1.05)' },
    gallery: [
      '/Data/pf/21.jpg', '/Data/pf/22.png', '/Data/pf/23.png', '/Data/pf/24.png',
      '/Data/pf/25.png', '/Data/pf/26.png', '/Data/pf/27.png', '/Data/pf/28.png'
    ],
    summary:
      'A side-by-side run breakdown illustrating how initial whitebox geometry transforms into a stylized nighttime metropolitan streetscape without compromising gameplay flow.',
    subtext: 'Demonstrates metric testing, route pacing, and atmospheric street dressing with dynamic lighting cues.',
    section1Title: 'RUN-THROUGH READABILITY & HEIGHT PROGRESSION',
    section1Para: 'Planned high-speed traversal lines along rooftops and alleys, calibrating ramps and fire escapes for fluid momentum.',
    highlights: [
      'Side-by-side comparison of obstacles, wall-run surfaces, and gap timings.',
      'Neon and street-lamp lighting cues placed to naturally attract player eye gaze.',
      'Multi-lane urban cross-sections designed with clear visual hierarchy.',
      'Seamless transition from raw primitive whiteboxes to detailed stylized architecture.'
    ],
    section2Title: 'DYNAMIC LIGHTING AS GUIDING SIGNS',
    section2Para: 'Contrasted warm interior illumination against cool street alleys to highlight branching escape paths.'
  },

  // ==========================================
  // 2. TENGEN PARKOUR (WITH MECHANICS VIDEOS INTEGRATED)
  // ==========================================
  {
    id: 'tengen-parkour',
    category: 'SHIPPED GAMES',
    title: 'TenGen Parkour',
    caseTitle: 'TENGEN PARKOUR : KINEMATIC MOVEMENT & GAUNTLET LEVELS',
    subtitle: 'High-Speed Movement Platformer',
    badge: 'RELEASED GAME',
    engine: 'Unity C#',
    role: 'Lead Dev & Level Designer',
    studio: 'ThroneLeaf Games',
    duration: '4 MONTHS (2026)',
    thumbnail: '/Data/13.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.02)' },
    videoFile: '/Data/15.mp4',
    gallery: [
      '/Data/pf/t1.png',
      '/Data/13.png',
      '/Data/100.png',
      '/Data/14.png'
    ],
    // Video clips integrated into TenGen mechanics showcase
    mechanicClips: [
      '/Data/101.mp4', '/Data/102.mp4', '/Data/103.mp4', '/Data/104.mp4',
      '/Data/105.mp4', '/Data/106.mp4', '/Data/107.mp4', '/Data/108.mp4',
      '/Data/109.mp4', '/Data/110.mp4', '/Data/111.mp4', '/Data/112.mp4'
    ],
    summary:
      'TenGen Parkour is a standalone 3D high-speed movement platformer released on Itch.io. Led core controller mechanics and designed 7 linear obstacle gauntlets with an interactive lobby hub.',
    subtext: 'Built with custom C# kinematic physics for seamless wall-runs, slide-hops, mantles, and momentum preservation.',
    section1Title: 'MOMENTUM CONSERVATION & OBSTACLE GAUNTLETS',
    section1Para: 'Jump distances and wall-run lengths scale dynamically with player acceleration curves, rewarding precision timing.',
    highlights: [
      'Custom C# kinematic physics controller calibrated for high-velocity wall-runs and mantles.',
      '7 bespoke platforming obstacle courses built with escalating mechanical difficulty.',
      'Central interactive hub designed with non-linear practice loops and secret training routes.',
      'Shipped optimized PC beta on Itch.io with low draw-call overhead and smooth 60+ FPS frame pacing.'
    ],
    section2Title: 'FLOW STATE OPTIMIZATION',
    section2Para: 'Tuned obstacle spacing to musical rhythm patterns, eliminating dead stops and supporting infinite player flow.',
    itchUrl: 'https://theroneleaf-games.itch.io/tg-parkour'
  },

  // ==========================================
  // 3. GAME MECHANICS (STANDALONE SECTION)
  // ==========================================
  {
    id: 'game-mechanics',
    category: 'GAME MECHANICS',
    title: 'Kinematic Gameplay Mechanics',
    caseTitle: 'GAME MECHANICS : PHYSICS CONTROLLER & INTERACTION SYSTEMS',
    subtitle: 'Unity C# Movement & Traversal System',
    badge: 'SYSTEMS',
    engine: 'Unity C#',
    role: 'Gameplay Programmer & Designer',
    studio: 'ThroneLeaf Games',
    duration: '2025 - 2026',
    thumbnail: '/Data/10000.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    videoFile: '/Data/101.mp4',
    // 101 to 112 + 800
    videoPlaylist: [
      { file: '/Data/101.mp4', title: 'Wall Run & Velocity Vector Retention' },
      { file: '/Data/102.mp4', title: 'Slide Hop & Dynamic Friction Modulation' },
      { file: '/Data/103.mp4', title: 'Ledge Grab & Vertical Raycast Mantle' },
      { file: '/Data/104.mp4', title: 'Slope Acceleration & Air Strafing' },
      { file: '/Data/105.mp4', title: 'Interactive Jump Pad Impulse Trajectory' },
      { file: '/Data/106.mp4', title: 'Dynamic Camera Tilt on Wall Contact' },
      { file: '/Data/107.mp4', title: 'Z-Axis Momentum Buffer & Buffered Jumps' },
      { file: '/Data/108.mp4', title: 'Crouch Slide Under Low Clearance Hazards' },
      { file: '/Data/109.mp4', title: 'Multi-Surface Footstep Audio & Impact Decals' },
      { file: '/Data/110.mp4', title: 'Wall Clamber Angle Alignment Logic' },
      { file: '/Data/111.mp4', title: 'Speed Pad Acceleration Multiplier System' },
      { file: '/Data/112.mp4', title: 'Checkpoint Respawn & Momentum Nullification' },
      { file: '/Data/800.mp4', title: '2D Action Traversal & Combat State Machine' }
    ],
    gallery: [
      '/Data/1000.png',
      '/Data/1001.png',
      '/Data/1002.png'
    ],
    summary:
      'A modular library of gameplay mechanics built in Unity C#, featuring precision kinematic character movement, wall-run angle snapping, slide momentum, and custom physics triggers.',
    subtext: 'Engineered for responsive player input without reliance on erratic default PhysX rigidbody behavior.',
    section1Title: 'CUSTOM KINEMATIC CONTROLLER ARCHITECTURE',
    section1Para: 'Utilizes multi-raycast surface detection to calculate normal reflection angles for predictive slope sliding and wall cling physics.',
    highlights: [
      'Zero-jitter wall-running supporting convex and concave wall profiles.',
      'Input buffering allowing responsive jump/mantle queues during aerial states.',
      'Custom ground-check sphere-cast preventing snagging on metric stairs and ramps.',
      'Complete state machine architecture separating walking, sprinting, airborne, and wall states.'
    ],
    section2Title: 'PERFORMANCE & RESPONSIVENESS',
    section2Para: 'All kinematic calculations execute in FixedUpdate with interpolation enabled, guaranteeing fluid physics at any framerate.'
  },

  // ==========================================
  // 4. 3D MODELS (5 DISCRETE HARD-SURFACE MODELS)
  // ==========================================
  {
    id: '3d-models-collection',
    category: '3D MODELS',
    title: 'Hard-Surface 3D Asset Collection',
    caseTitle: '3D MODELING & PROPS : HARD-SURFACE PIPELINE',
    subtitle: 'Blender SubD & Game-Ready Topology',
    badge: '3D SHOWCASE',
    engine: 'Blender 3D',
    role: 'Hard-Surface 3D Modeler',
    studio: 'Asset Showcase',
    duration: '2025 - 2026',
    thumbnail: '/Data/7.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    videoFile: '/Data/11.mp4',
    // 5 discrete models mapped exactly
    modelsList: [
      {
        name: 'Model 01: Sci-Fi Industrial Complex / Structure',
        images: ['/Data/69.png', '/Data/66.png', '/Data/64.png'],
        desc: 'Modular industrial structure modeled with clean bevel edge weights and non-destructive booleans.'
      },
      {
        name: 'Model 02: Tactical Combat Equipment / Hard-Surface Prop',
        images: ['/Data/61.png', '/Data/56.png', '/Data/5.jpg', '/Data/6.jpg', '/Data/54.png'],
        desc: 'High-to-low poly baked prop featuring weighted normals and optimized UV packing.'
      },
      {
        name: 'Model 03: Mechanical Weapon / Assembly Turret',
        video: '/Data/11.mp4',
        images: ['/Data/10.png'],
        desc: 'Full mechanical assembly featuring rotating joint clearances and functional mechanical topology.'
      },
      {
        name: 'Model 04: Futuristic Transport & Supply Container Unit',
        images: ['/Data/7.png', '/Data/8.png', '/Data/9.png'],
        desc: 'Heavy cargo and military storage container designed for modular sci-fi environment kits.'
      },
      {
        name: 'Model 05: Stylized Character & Action Prop Props',
        images: ['/Data/2.png', '/Data/3.png'],
        desc: 'Low-poly game-ready models built with minimal tri budgets and clean silhouette readability.'
      }
    ],
    gallery: [
      '/Data/7.png', '/Data/8.png', '/Data/9.png', '/Data/10.png',
      '/Data/69.png', '/Data/66.png', '/Data/64.png',
      '/Data/61.png', '/Data/56.png', '/Data/54.png'
    ],
    summary:
      'Comprehensive hard-surface modeling showcase created in Blender, encompassing mechanical assemblies, modular environment structures, and optimized game-ready props.',
    subtext: 'Built utilizing MeshMachine, BoolTool, and weighted normal passes for pristine PBR baking.',
    section1Title: 'TOPOLOGY & BAKING PIPELINE',
    section1Para: 'Maintained strict quad-dominant flow during SubD phases, converting into clean triangulated low-poly game hulls without shading artifacts.',
    highlights: [
      'SubD high-poly modeling with procedural chamfers and bevel modifiers.',
      'Weighted normal workflow eliminating the need for excessive supporting edge loops.',
      'Clean UV unwrapping with >85% packing efficiency and mirrored symmetry optimizations.',
      'Verified in Unity and Unreal Engine under varying dynamic lighting angles.'
    ],
    section2Title: 'MODULAR ENVIRONMENT INTEGRATION',
    section2Para: 'Standardized pivot points and grid snaps enable seamless modular kit assembly directly in-engine.'
  },

  // ==========================================
  // 5. GAME UI DESIGN (700, 701, 702, 703)
  // ==========================================
  {
    id: 'game-ui-design',
    category: 'GAME UI',
    title: 'Game UI & HUD Systems',
    caseTitle: 'GAME UI & INTERACTION DESIGN : DIEGETIC & HUD',
    subtitle: 'Tactical & Movement Interface Systems',
    badge: 'UI DESIGN',
    engine: 'Unity Canvas / Krita',
    role: 'UI Designer & Scripter',
    studio: 'Interface Systems',
    duration: '2025 - 2026',
    thumbnail: '/Data/700.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    gallery: [
      '/Data/700.png',
      '/Data/701.png',
      '/Data/702.png',
      '/Data/703.png'
    ],
    summary:
      'In-game user interfaces, pause menus, mission briefings, and HUD elements designed for tactical FPS and high-speed platformers.',
    subtext: 'Designed for high contrast, scalable canvas anchoring, and fast cognitive readability under intense combat conditions.',
    section1Title: 'VISUAL HIERARCHY & SCREEN READABILITY',
    section1Para: 'HUD elements are positioned along peripheral anchoring zones to maximize gameplay visibility without obstructing targeting sightlines.',
    highlights: [
      'Clean layout compositions captured in screens 700, 701, 702, and 703.',
      'Sleek cyberpunk dark-glass aesthetic with purple (#8a1df4) accent styling.',
      'Anchored layouts accommodating 16:9, 16:10, and ultrawide 21:9 monitors without aspect distortion.',
      'Interactive button hover states, sound cues, and gamepad navigation triggers.'
    ],
    section2Title: 'MICRO-INTERACTIONS & USER EXPERIENCE',
    section2Para: 'Implemented fluid panel fade and slider transitions for consistent audio and settings adjustments.'
  }
];

export const skillsList = [
  'Blockout and Layout',
  'Metrics and Pacing',
  'Encounter Design',
  'Playtests and Iteration',
  'Level Design Documentation',
  'Unity C# & ProBuilder',
  'Unreal Engine Greyboxing',
  'Blender Hard-Surface 3D',
  'Gameplay Mechanics Programming',
  'Game UI & HUD Systems',
  'Team Direction (ThroneLeaf Games)'
];