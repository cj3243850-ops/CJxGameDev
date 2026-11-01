export const projectsData = [
  // ==========================================
  // 1. LEVEL DESIGN (CORE 5 PROJECTS)
  // ==========================================
  {
    id: 'devils-legacy',
    category: 'LEVEL DESIGN',
    title: "Devil's Legacy",
    caseTitle: "Devil's Legacy: The Final Dream Maze",
    subtitle: 'Horror Labyrinth Blockout',
    badge: 'Active collaboration',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'DL-Core Indie Studio',
    duration: '1 month + ongoing (2025 – present)',
    youtubeId: 'ZBjVunuyMlU',
    thumbnail: 'https://img.youtube.com/vi/ZBjVunuyMlU/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'center 20%', transform: 'scale(1.22)' },
    gallery: ['/Data/pf/41.png', '/Data/pf/42.png', '/Data/pf/43.png'],
    summary:
      "A psychological survival horror demo where tension and disorientation drive the pacing. I'm working with DL-Core Indie Studio on the greybox horror encounters and the final dream sequence chase layout.",
    subtext: 'Working with DL-Core on sightline breaks, narrative triggers and dead ends.',
    section1Title: 'Labyrinth pacing & disorientation',
    section1Para: 'The sequence opens in a circular rotunda, then funnels the player into deceptive 90-degree corridors.',
    highlights: [
      'Circular pillar rotunda that anchors the sequence.',
      'Tight corridor network sized to the chase speed and turn radius.',
      'Routing built around the London Bridge music box trigger and a fake staircase dead end.',
      'Low-poly proxy meshes for occlusion and light bounce.'
    ],
    section2Title: 'Iteration & tension balancing',
    section2Para: 'Playtests showed players escaping too easily, so I added a false double-back hallway and raised pillar density.'
  },
  {
    id: 'as-the-stars-fall',
    category: 'LEVEL DESIGN',
    title: 'As The Stars Fall',
    caseTitle: 'As The Stars Fall: The Green City layout',
    subtitle: 'Urban Environment Blockout',
    badge: 'Active collaboration',
    engine: 'Blender / Unity',
    role: 'Environment & Level Designer',
    studio: 'Indie Collective',
    duration: 'Ongoing (2025 – present)',
    youtubeId: 'jDYKchNn9Z4',
    thumbnail: 'https://img.youtube.com/vi/jDYKchNn9Z4/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left center', transform: 'scale(1.02)' },
    gallery: ['/Data/pf/51.png', '/Data/pf/52.png'],
    summary:
      'A narrative adventure set in an overgrown metropolis. I work as environment and level designer on The Green City street grid, keeping low-poly metrics, zero n-gon topology and one shared texture atlas.',
    subtext: 'Designing urban routes scaled to a roughly 100 cm character.',
    section1Title: 'Urban scale & navigation',
    section1Para: 'Curbs, doorways and vehicles are scaled to feel imposing while keeping mantle and jump clearances fluid.',
    highlights: [
      'Streets scaled to a ~100 cm character controller.',
      'Landmarks placed at sightline intersections: subway, pharmacy, bookstore.',
      'Single 2K/4K texture atlas to cut material overhead.',
      'Modular facades built on a grid in Blender.'
    ],
    section2Title: 'Density vs readability',
    section2Para: 'Street clutter is balanced to guide routing without blocking the main thoroughfares.'
  },
  {
    id: 'tactical-arena',
    category: 'LEVEL DESIGN',
    title: 'Tactical 6v6 Arena',
    caseTitle: 'Tactical 6v6 Arena: Competitive FPS layout',
    subtitle: 'Competitive FPS Map Blockout',
    badge: '1-week sprint',
    engine: 'Unreal Engine',
    role: 'Level Designer',
    studio: 'Solo Project',
    duration: '1-week sprint (2025)',
    youtubeId: '1w0CrGYUXGQ',
    thumbnail: 'https://img.youtube.com/vi/1w0CrGYUXGQ/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left center', transform: 'scale(0.94)' },
    gallery: ['/Data/pf/31.png', '/Data/pf/32.png', '/Data/pf/33.png', '/Data/pf/34.png', '/Data/pf/35.png'],
    summary:
      'A competitive 6v6 CTF arena blockout built solo in Unreal Engine over one week, around balanced lane timing, two-tier verticality and staged cover.',
    subtext: 'Symmetrical spawn-to-objective route times, with no headglitch angles that can\'t be countered.',
    section1Title: 'Three-lane structure & cover',
    section1Para: 'A modified three-lane layout with connected catwalks and modular container placement.',
    highlights: [
      'Symmetrical bases with matched sprint timings to mid.',
      'Staggered containers that break up long sightlines.',
      'Upper catwalks balanced by exposed side flanks.',
      'Greybox validation in-engine across one week.'
    ],
    section2Title: 'Combat pacing',
    section2Para: 'Mid-map crate staging stops attackers locking down a site, so defenders always have two exits.'
  },
  {
    id: 'probuilder-showcase',
    category: 'LEVEL DESIGN',
    title: 'Citadel Blockout',
    caseTitle: 'Citadel Blockout: ProBuilder to environment art',
    subtitle: 'ProBuilder to Environment Art',
    badge: 'Workflow',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'Pipeline Showcase',
    duration: '2 months (2025)',
    youtubeId: 'AVkL5OWZ72Y',
    thumbnail: 'https://img.youtube.com/vi/AVkL5OWZ72Y/maxresdefault.jpg',
    thumbStyle: { objectPosition: 'left 25%', transform: 'scale(1.2)' },
    gallery: ['/Data/pf/11.png', '/Data/pf/12.png', '/Data/pf/13.png', '/Data/pf/14.png', '/Data/pf/15.png'],
    summary:
      'A full level design pipeline from fast modular whiteboxing in Unity ProBuilder through to finished medieval castle art.',
    subtext: 'Looks at how landmarks, verticality and readability survive the art pass.',
    section1Title: 'Greybox prototyping & scale',
    section1Para: 'Built in-engine from ProBuilder primitives to test walls, towers and drawbridges.',
    highlights: [
      'Multi-level fortress blockout made in Unity with ProBuilder.',
      'Player flow checked before and after dressing.',
      'Bridge and parapet chokes built for defensive standoffs.',
      'Sightlines kept clear of clutter.'
    ],
    section2Title: 'Art integration check',
    section2Para: 'Dense environment meshes dress the whitebox without breaking mantle heights or collision.'
  },
  {
    id: 'transformation-breakdown',
    category: 'LEVEL DESIGN',
    title: 'Urban Transformation',
    caseTitle: 'Urban Transformation: Whitebox to final city',
    subtitle: 'Before & After Environment',
    badge: 'Iteration',
    engine: 'Unity',
    role: 'Level Designer',
    studio: 'ThroneLeaf Games',
    duration: '5 months (2025 – 2026)',
    youtubeId: 'PzTLNUuptOg',
    thumbnail: 'https://img.youtube.com/vi/PzTLNUuptOg/maxresdefault.jpg',
    thumbStyle: { objectPosition: '18% center', transform: 'scale(1.05)' },
    gallery: [
      '/Data/pf/21.jpg', '/Data/pf/22.png', '/Data/pf/23.png', '/Data/pf/24.png',
      '/Data/pf/25.png', '/Data/pf/26.png', '/Data/pf/27.png', '/Data/pf/28.png'
    ],
    summary:
      'A side-by-side breakdown of whitebox geometry becoming a stylized night-time street, with the gameplay flow kept intact.',
    subtext: 'Covers metric testing, route pacing and lighting that guides the eye.',
    section1Title: 'Run-through readability & height',
    section1Para: 'High-speed lines were planned along rooftops and alleys, with ramps and fire escapes sized for momentum.',
    highlights: [
      'Side-by-side comparison of obstacles, wall-run surfaces and gap timings.',
      'Neon and street lighting placed to pull the player\'s eye.',
      'Multi-lane cross-sections with a clear hierarchy.',
      'Primitive whiteboxes carried through to stylized architecture.'
    ],
    section2Title: 'Lighting as a guide',
    section2Para: 'Warm interior light sits against cool alleys to mark the escape branches.'
  },

  // ==========================================
  // 2. TENGEN PARKOUR (INDIE STUDIO - 8 MONTHS)
  // ==========================================
  {
    id: 'tengen-parkour',
    category: 'SHIPPED GAMES',
    title: 'TenGen Parkour',
    caseTitle: 'TenGen Parkour: Movement controller & gauntlets',
    subtitle: 'High-Speed Movement Platformer',
    badge: 'Released game',
    engine: 'Unity C#',
    role: 'Lead Dev & Level Designer',
    studio: 'ThroneLeaf Games',
    duration: '8 months (2025 – 2026)',
    thumbnail: '/Data/13.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.02)' },
    videoFile: '/Data/15.mp4',
    gallery: [
      '/Data/pf/t1.png',
      '/Data/13.png',
      '/Data/100.png',
      '/Data/14.png'
    ],
    mechanicClips: [
      '/Data/101.mp4', '/Data/102.mp4', '/Data/103.mp4', '/Data/104.mp4',
      '/Data/105.mp4', '/Data/106.mp4', '/Data/107.mp4', '/Data/108.mp4',
      '/Data/109.mp4', '/Data/110.mp4', '/Data/111.mp4', '/Data/112.mp4'
    ],
    summary:
      'A standalone 3D high-speed platformer released on itch.io after eight months with ThroneLeaf Games. I led the controller mechanics and designed seven obstacle gauntlets plus a lobby hub.',
    subtext: 'Custom C# kinematic physics for wall-runs, slide-hops, mantles and momentum carry.',
    section1Title: 'Momentum & obstacle gauntlets',
    section1Para: 'Jump distances and wall-run lengths scale with acceleration, so clean timing is rewarded.',
    highlights: [
      'Custom C# kinematic controller tuned for high-speed wall-runs and mantles.',
      'Seven courses with an escalating difficulty curve.',
      'Hub level with looping practice routes and hidden training lines.',
      'Released PC beta on itch.io, kept light on draw calls with steady frame pacing.'
    ],
    section2Title: 'Flow state',
    section2Para: 'Obstacle spacing was tuned to a rhythm so the player never hits a dead stop.',
    itchUrl: 'https://theroneleaf-games.itch.io/tg-parkour'
  },

  // ==========================================
  // 3. GAME MECHANICS (STANDALONE SECTION)
  // ==========================================
  {
    id: 'game-mechanics',
    category: 'GAME MECHANICS',
    title: 'Kinematic Gameplay Mechanics',
    caseTitle: 'Game Mechanics: Physics controller & traversal',
    subtitle: 'Unity C# Movement & Traversal System',
    badge: 'Systems',
    engine: 'Unity C#',
    role: 'Gameplay Programmer & Designer',
    studio: 'ThroneLeaf Games',
    duration: '8 months (2025 – 2026)',
    thumbnail: '/Data/10000.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    videoFile: '/Data/101.mp4',
    videoPlaylist: [
      { file: '/Data/101.mp4', title: 'Wall Run & Velocity Vector Retention' },
      { file: '/Data/102.mp4', title: 'Slide Hop & Dynamic Friction Modulation' },
      { file: '/Data/103.mp4', title: 'Ledge Grab & Vertical Raycast Mantle' },
      { file: '/Data/104.mp4', title: 'Slope Acceleration & Air Strafing' },
      { file: '/Data/105.mp4', title: 'Jump Pad Impulse Trajectory' },
      { file: '/Data/106.mp4', title: 'Camera Tilt on Wall Contact' },
      { file: '/Data/107.mp4', title: 'Momentum Buffer & Buffered Jumps' },
      { file: '/Data/108.mp4', title: 'Crouch Slide Under Low Clearance' },
      { file: '/Data/109.mp4', title: 'Footstep Audio & Impact Decals' },
      { file: '/Data/110.mp4', title: 'Wall Clamber Angle Alignment' },
      { file: '/Data/111.mp4', title: 'Speed Pad Acceleration Multiplier' },
      { file: '/Data/112.mp4', title: 'Checkpoint Respawn & Momentum Reset' },
      { file: '/Data/800.mp4', title: '2D Action Traversal & Combat State Machine' }
    ],
    gallery: [
      '/Data/1000.png',
      '/Data/1001.png',
      '/Data/1002.png'
    ],
    summary:
      'A modular library of gameplay mechanics in Unity C#, covering precise kinematic movement, wall-run angle snapping, slide momentum and custom physics triggers.',
    subtext: 'Built for responsive input instead of default rigidbody behaviour.',
    section1Title: 'Kinematic controller architecture',
    section1Para: 'Multi-raycast surface detection works out normal reflection for slope sliding and wall cling.',
    highlights: [
      'Jitter-free wall-running on convex and concave walls.',
      'Input buffering for jumps and mantles while airborne.',
      'Sphere-cast ground check so the player doesn\'t snag on stairs and ramps.',
      'State machine separating walk, sprint, air and wall states.'
    ],
    section2Title: 'Performance',
    section2Para: 'Kinematic maths runs in FixedUpdate with interpolation, so it stays consistent at any frame rate.'
  },

  // ==========================================
  // 4. 3D MODELS (6 DISCRETE HARD-SURFACE MODELS)
  // ==========================================
  {
    id: '3d-models-collection',
    category: '3D MODELS',
    title: 'Hard-Surface 3D Asset Collection',
    caseTitle: '3D Modelling: Hard-surface pipeline',
    subtitle: 'Blender SubD, Real-Time Game Assets & Product Viz',
    badge: '3D showcase',
    engine: 'Blender 3D',
    role: 'Hard-Surface 3D Modeler',
    studio: 'Asset Showcase',
    duration: '2+ years practice',
    thumbnail: '/Data/7.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    videoFile: '/Data/11.mp4',
    modelsList: [
      {
        name: 'Model 01: Combat Robot Foot & Mechanical Leg Assembly',
        images: ['/Data/69.png', '/Data/66.png', '/Data/64.png'],
        desc: 'Mechanical robot foot and joint articulation, built with non-destructive booleans, clean bevels and clearance for the pivot.'
      },
      {
        name: 'Model 02: Ring Spaceship (Q-Ship)',
        images: ['/Data/61.png', '/Data/56.png', '/Data/5.jpg', '/Data/6.jpg', '/Data/54.png'],
        desc: 'Circular sci-fi ship with weighted normals, panel detail, thruster housing and a high-to-low bake.'
      },
      {
        name: 'Model 03: Product Perfume Bottle (early practice)',
        video: '/Data/11.mp4',
        images: ['/Data/10.png'],
        desc: 'Product study from early Blender practice, focused on glass transmission, metal reflections and studio lighting.'
      },
      {
        name: 'Model 04: Sci-Fi Modular Tower & Environment Spire',
        images: ['/Data/7.png', '/Data/8.png', '/Data/9.png'],
        desc: 'Stylized sci-fi beacon tower for real-time environments, built from modular pieces.'
      },
      {
        name: 'Model 05: Painted Sci-Fi Storage Box',
        images: ['/Data/2.png', '/Data/3.png'],
        desc: 'Game-ready supply crate with painted graffiti ("Help Me!"), edge wear and a low-poly budget.'
      },
      {
        name: 'Model 06: Robotic Hard-Surface Crate',
        images: ['/Data/800000.png', '/Data/800011.png', '/Data/800012.png'],
        desc: 'Robotic storage box with locking latches, reinforced chamfers and sub-d topology.'
      }
    ],
    gallery: [
      '/Data/800000.png', '/Data/800011.png', '/Data/800012.png',
      '/Data/7.png', '/Data/8.png', '/Data/9.png', '/Data/10.png',
      '/Data/69.png', '/Data/66.png', '/Data/64.png',
      '/Data/61.png', '/Data/56.png', '/Data/54.png'
    ],
    summary:
      'Six hard-surface assets built in Blender: mechanical robot joints, a sci-fi ring ship, product studies, modular towers, storage crates and painted props.',
    subtext: 'Modelled with MeshMachine, BoolTool and weighted normals for clean PBR shading.',
    section1Title: 'Topology & baking',
    section1Para: 'Quad flow was kept strict through the sub-d phase, then converted to clean low-poly hulls without shading artefacts.',
    highlights: [
      'Sub-d modelling with procedural chamfers and bevels.',
      'Crate built with modular latches and handles.',
      'Weighted normals cut the need for extra support loops.',
      'UVs packed efficiently with mirrored symmetry.',
      'Checked in Unity and Unreal under changing light angles.'
    ],
    section2Title: 'Modular assembly',
    section2Para: 'Shared pivots and grid snaps let the kits go together in-engine.'
  },

  // ==========================================
  // 5. GAME UI DESIGN (700, 701, 702, 703)
  // ==========================================
  {
    id: 'game-ui-design',
    category: 'GAME UI',
    title: 'Game UI & HUD Systems',
    caseTitle: 'Game UI: HUD & interaction',
    subtitle: 'Tactical & Movement Interface Systems',
    badge: 'UI design',
    engine: 'Unity Canvas / Krita',
    role: 'UI Designer & Scripter',
    studio: 'Interface Systems',
    duration: '2025 – 2026',
    thumbnail: '/Data/700.png',
    thumbStyle: { objectPosition: 'center center', transform: 'scale(1.0)' },
    gallery: [
      '/Data/700.png',
      '/Data/701.png',
      '/Data/702.png',
      '/Data/703.png'
    ],
    summary:
      'In-game HUDs, pause menus, mission briefings and interface elements for tactical FPS and high-speed platformer projects.',
    subtext: 'Built for high contrast, scalable anchors and fast reading under pressure.',
    section1Title: 'Hierarchy & readability',
    section1Para: 'HUD elements sit on the screen edges so the centre stays clear.',
    highlights: [
      'Layouts shown in screens 700 to 703.',
      'Dark glass look with a purple (#8a1df4) accent.',
      'Anchors that hold 16:9, 16:10 and 21:9 without distortion.',
      'Hover states, sound cues and gamepad navigation.'
    ],
    section2Title: 'Micro-interactions',
    section2Para: 'Panel fades and slider transitions keep settings changes smooth.'
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