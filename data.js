const controller = [
  {
  	name: "controller",
    options: [
 			{	title: "HCIM"},
    ]
  }
];

const fedata = [
	{
  	title: "At Bit Gamma",
    minlength: 5,
    options: [
 			{	title: "GeoPilot ABG"},
      {	title: "ICruise GM"},
      {	title: "N/A"},
    ]
  },
	{
  	title: "Gamma",
    minlength: 5,
    options: [
    	{	title: "AGR"},
      {	title: "DGR"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Resistivity",
    minlength: 5,
    options: [
    	{	title: "EWR-P4D"},
      {	title: "EWR-P4"},
      {	title: "ADR"},
      {	title: "EWR-M5"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Sonic",
    minlength: 5,
    options: [
    	{	title: "BAT"},
      {	title: "XBAT"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Resonance",
    minlength: 5,
    options: [
    	{	title: "MRIL-WD"},
      {	title: "N/A"},
    ]
  }
];

const drilling = [
	{
  	title: "Vibration",
    minlength: 4,
    multiple: true,
    options: [
      {	title: "DDSr-DOC1"},
      {	title: "DDSr-GP"},
      {	title: "DDSr-HCIM"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Pressure",
    minlength: 4,
    options: [
    	{	title: "PWD"},
      {	title: "PWD-M5"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Torque e WOB",
    minlength: 4,
    options: [
    	{	title: "DRILLDOC"},
      {	title: "N/A"},
    ]
  },
  {
  	title: "Directional",
    minlength: 4,
    options: [
    	{	title: "PCD-C"},
      {	title: "N/A"},
    ]
  }
];

const telemetry = [
  {
    title: "Hardware",
    options: [
      {title: "NEGATIVE PULSE"},
      {title: "POSITIVE PULSE"},
      {title: "N/A (Standalone)", value: "n/a"},
    ]
  },
  {
    title: "Transmission",
    minlength: 3,
    options: [
      {title: "Dual Mode"},
      {title: "Multi mode"},
      {title: "Memory (Standalone)"},
    ]
  }
]