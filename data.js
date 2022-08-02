const controller = [
  {
    name: "HCIM",
    checked: true,
    memory: {
      type: "ECMB",
      capacity: 4096
    },
    battery: {
      capacity: 96,
      charge: 95.98
    }
  }
];

const fedata = [
	{
  	type: "At Bit Gamma",
    battery: false,
    memmory: false,
    tools: [
 			{	name: "GeoPilot ABG", curves: [
      	"R|ABG|Gamma Ray|ABGC|GeoPilot At Bit Gamma Ray (api)",
        "M|ABG|Gamma Ray|ABGC|GeoPilot At Bit Gamma Ray (api)",
      ], checked: false},
      {	name: "ICruise GM", curves: [
      	"R|RG GR RT|Gamma Ray|ABGC|ICruise At Bit Gamma Ray (api)",
        "M|RG GM Bulk|Gamma Ray|ABGC|ICruise At Bit Gamma Ray (api)",
      ], checked: false},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
	{
  	type: "Gamma",
    battery: false,
    memmory: false,
    tools: [
    	{	name: "AGR", curves: [], checked: false},
      {	name: "DGR", curves: [
      	"R|DGR|Gamma Ray|SGRC|DGR Combined Gamma Ray (api)",
				"M|DGR|Gamma Ray|SGRC|DGR Combined Gamma Ray (api)",
      ], 
      checked: false},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
  {
  	type: "Resistivity",
    battery: false,
    memmory: false,
    tools: [
    	{	name: "EWR-P4D", curves: [
      	"R|EWR 42T|EWR Phase Res|R42P|EWR 42in Phase Resistivity 1Mhz (Ohm.m)",
        "R|EWR 30T|EWR Phase Res|R30P|EWR 30in Phase Resistivity 2Mhz (Ohm.m)",
        "R|EWR 24T|EWR Phase Res|R24P|EWR 24in Phase Resistivity 2Mhz (Ohm.m)",
        "R|EWR 18T|EWR Phase Res|R18P|EWR 18in Phase Resistivity 2Mhz (Ohm.m)",
				"R|EWR 42T|EWR Atten Res|R42A|EWR 42in Attenuation Resistivity 1Mhz (Ohm.m)",
        "R|EWR 30T|EWR Atten Res|R30A|EWR 30in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|EWR 24T|EWR Atten Res|R24A|EWR 24in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|EWR 18T|EWR Atten Res|R18A|EWR 18in Attenuation Resistivity 2Mhz (Ohm.m)",
				"M|EWR 42T|EWR Phase Res|R42P|EWR 42in Phase Resistivity 1Mhz (Ohm.m)",
        "M|EWR 30T|EWR Phase Res|R30P|EWR 30in Phase Resistivity 2Mhz (Ohm.m)",
        "M|EWR 24T|EWR Phase Res|R24P|EWR 24in Phase Resistivity 2Mhz (Ohm.m)",
        "M|EWR 18T|EWR Phase Res|R18P|EWR 18in Phase Resistivity 2Mhz (Ohm.m)",
        "M|EWR 42T|EWR Atten Res|R42A|EWR 42in Attenuation Resistivity 1Mhz (Ohm.m)",
        "M|EWR 30T|EWR Atten Res|R30A|EWR 30in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|EWR 24T|EWR Atten Res|R24A|EWR 24in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|EWR 18T|EWR Atten Res|R18A|EWR 18in Attenuation Resistivity 2Mhz (Ohm.m)",
      ],
      checked: false},
      {	name: "EWR-P4", curves: [
      	"R|EWR 39T|EWR Phase Res|R39P|EWR 39in Phase Resistivity 1Mhz (Ohm.m)",
        "R|EWR 27T|EWR Phase Res|R27P|EWR 27in Phase Resistivity 2Mhz (Ohm.m)",
        "R|EWR 15T|EWR Phase Res|R15P|EWR 15in Phase Resistivity 2Mhz (Ohm.m)",
        "R|EWR 09T|EWR Phase Res|R09P|EWR 09in Phase Resistivity 2Mhz (Ohm.m)",
				"R|EWR 39T|EWR Atten Res|R39A|EWR 39in Attenuation Resistivity 1Mhz (Ohm.m)",
        "R|EWR 27T|EWR Atten Res|R27A|EWR 27in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|EWR 15T|EWR Atten Res|R15A|EWR 15in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|EWR 09T|EWR Atten Res|R09A|EWR 09in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|EWR 39T|EWR Phase Res|R39P|EWR 39in Phase Resistivity 1Mhz (Ohm.m)",
        "M|EWR 27T|EWR Phase Res|R27P|EWR 27in Phase Resistivity 2Mhz (Ohm.m)",
        "M|EWR 15T|EWR Phase Res|R15P|EWR 15in Phase Resistivity 2Mhz (Ohm.m)",
        "M|EWR 09T|EWR Phase Res|R09P|EWR 09in Phase Resistivity 2Mhz (Ohm.m)",
				"M|EWR 39T|EWR Atten Res|R39A|EWR 39in Attenuation Resistivity 1Mhz (Ohm.m)",
        "M|EWR 27T|EWR Atten Res|R27A|EWR 27in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|EWR 15T|EWR Atten Res|R15A|EWR 15in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|EWR 09T|EWR Atten Res|R09A|EWR 09in Attenuation Resistivity 2Mhz (Ohm.m)",
      ], checked: false},
      {	name: "ADR", curves: [
      	"R|ADR Comp Avg RT|PRes125K48in|RL48P|ADR 48in Phase Resistivity 125Khz (Ohm.m)",
        "R|ADR Comp Avg RT|ARes125K48in|RL48A|ADR 48in Attenuation Resistivity 125Khz (Ohm.m)",
        "R|ADR Comp Avg RT|PRes2M48in|RH48P|ADR 48in Phase Resistivity 2Mhz (Ohm.m)",
        "R|ADR Comp Avg RT|ARes2M48in|RH48A|ADR 48in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|ADR Comp Avg RT|PRes2M32in|RH32P|ADR 32in Phase Resistivity 2Mhz (Ohm.m)",
        "R|ADR Comp Avg RT|ARes2M32in|RH32A|ADR 32in Attenuation Resistivity 2Mhz (Ohm.m)",
        "R|ADR Comp Avg RT|PRes2M16in|RH16P|ADR 16in Phase Resistivity 2Mhz (Ohm.m)",
        "R|ADR Comp Avg RT|ARes2M16in|RH16A|ADR 16in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 48L|Avg Phase Res|RL48P|ADR 48in Phase Resistivity 125Khz (Ohm.m)",
        "M|ADR Comp Av 48L|Avg Atten Res|RL48A|ADR 48in Attenuation Resistivity 125Khz (Ohm.m)",
        "M|ADR Comp Av 48H|Avg Phase Res|RH48P|ADR 48in Phase Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 48H|Avg Atten Res|RH48A|ADR 48in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 32H|Avg Phase Res|RH32P|ADR 32in Phase Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 32H|Avg Atten Res|RH32A|ADR 32in Attenuation Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 16H|Avg Phase Res|RH16P|ADR 16in Phase Resistivity 2Mhz (Ohm.m)",
        "M|ADR Comp Av 16H|Avg Atten Res|RH16A|ADR 16in Attenuation Resistivity 2Mhz (Ohm.m)",
        ], checked: true},
      {	name: "EWR-M5", curves: [], checked: false},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
  {
  	type: "Sonic",
    battery: true,
    memmory: true,
    tools: [
    	{	name: "BAT", curves: [
      	"R|BAT Sonic RT|Comp Slowness|DTC|BAT Compressional Slowness (uspf)",
        "R|BAT Sonic RT|Shear Slowness|DTS|BAT Shear Slowness (uspf)",
        "M|BAT Studio|DTC|DTC|BAT Compressional Slowness (uspf)",
        "M|BAT Studio|DTC|DTS|BAT Shear Slowness (uspf)",
      ], checked: false},
      {	name: "XBAT", curves: [
      	"R|XBAT RT|Comp Slowness|XDTC|XBAT Compressional Slowness (uspf)",
        "R|XBAT RT|Shear Slowness|XDTS|XBAT Shear Slowness (uspf)",
        "M|XBAT Studio|DTC|XDTC|XBAT Compressional Slowness (uspf)",
        "M|XBAT Studio|DTC|XDTS|XBAT Shear Slowness (uspf)",
      ], checked: false},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
  {
  	type: "Resonance",
    battery: true,
    memmory: true,
    tools: [
    	{	name: "MRIL-WD", curves: [
      	"R|MRIL-WD Spectra|MPHIT1|MPHIT1|MRIL-WD Effective Porosity (pu)",
        "R|MRIL-WD Spectra|MFFIT1|MFFIT1|MRIL-WD Free Fluid Porosity (pu)",
        "R|MRIL-WD Spectra|T1 Perm|MPERMT1|MRIL-WD Permeability (mD)",
        "R|MRIL-WD Spectra|Poros Total|MSIGT1|MRIL-WD Total Porosity (pu)",
        "R|MRIL-WD Spectra|T1 Sm Spectra|T1DIST|MRIL-WD Distribution (ms)",
        "R|MRIL-WD Spectra|MLOGMT1|T1LM|MRIL-WD Distribution Log Mean (ms)",
      ], checked: true},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
];

const drilling = [
	{
  	name: "Vibration",
    multiple: true,
    tools: [
 			{	name: "DDSr-DGR", curves: [], checked: false},
      {	name: "DDSr-DOC1", curves: [], checked: false},
      {	name: "DDSr-GP", curves: [], checked: false},
      {	name: "DDSr-HCIM", curves: [], checked: false},
      {	name: "N/A", curves: [], checked: false},
    ]
  },
  {
  	name: "Pressure",
    battery: false,
    memmory: false,
    tools: [
    	{	name: "PWD", curves: [], checked: true},
      {	name: "PWD-M5", curves: [], checked: true},
      {	name: "N/A", curves: [], checked: true},
    ]
  },
  {
  	name: "Torque e Weight",
    tools: [
    	{	name: "DRILLDOC", curves: [], checked: true},
      {	name: "N/A", curves: [], checked: true},
    ]
  }
];

const telemetry = [
  {
    name: "NEGATIVE PULSE",
    checked: true,
    limits: {
      lcm: "40 lb/bbl Fine/Medium"
    },
    battery: 46,
  },
  {
    name: "POSITIVE PULSE",
    checked: false,
    limits: {
      lcm: "120 lb/bbl Fine/Medium"
    },
    battery: null,
  },
  {
    name: "EM",
    checked: false,
    limits: {
      lcm: "120 lb/bbl Fine/Medium"
    },
    battery: null,
  },
  {
    name: "N/A (Standalone)",
    checked: false,
  }
];

const transmission = [
  {
    name: "Dual Mode",
    checked: true,
  },
  {
    name: "Multi mode",
    checked: false,
  },
  {
    name: "Memory (Standalone)",
    checked: false,
  }
]