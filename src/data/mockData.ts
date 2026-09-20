export type RiskLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';

export interface EnvironmentalMetric {
  rainfall: { value: number; unit: string; description: string };
  soilMoisture: { value: number; unit: string; description: string };
  waterLevel: { value: number; unit: string; description: string; trend: 'rising' | 'falling' | 'stable' };
  slope: { value: number; unit: string; description: string };
  historicalVulnerability: 'Low' | 'Moderate' | 'High' | 'Critical';
}

export interface RiskData {
  score: number;
  level: RiskLevel;
  forecastWindow: string;
  leadTime: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  explanation: string[];
  recommendedAction: string[];
}

export interface Area {
  id: string;
  name: string;
  district: string;
  lat: number;
  lng: number;
  riskData: RiskData;
  metrics: EnvironmentalMetric;
  sensorHealth: { online: number; total: number };
}

export interface Sensor {
  id: string;
  name: string;
  type: 'Rain Gauge' | 'Soil Moisture Sensor' | 'Water Level Sensor' | 'Slope/Displacement Sensor' | 'Weather Station';
  reading: string;
  status: 'ONLINE' | 'DELAYED' | 'OFFLINE';
  lastUpdate: string;
  location: [number, number];
}

export interface Alert {
  id: string;
  severity: RiskLevel;
  location: string;
  riskScore: number;
  timestamp: string;
  forecastWindow: string;
  reason: string;
  status: 'Active' | 'Resolved';
}

export interface HistoricalEvent {
  id: string;
  type: 'Flood' | 'Landslide';
  date: string;
  location: string;
  lat: number;
  lng: number;
  description: string;
  impactSummary: string;
}

export interface TimeSeriesData {
  time: string;
  rainfall: number;
  soilMoisture: number;
  waterLevel: number;
  riskScore: number;
}

export const mockAreas: Area[] = [
  {
    id: 'a1',
    name: 'Village XYZ',
    district: 'North District',
    lat: 27.5,
    lng: 88.5,
    riskData: {
      score: 82,
      level: 'HIGH',
      forecastWindow: 'Next 2–4 Hours',
      leadTime: '3 hours',
      trend: 'increasing',
      explanation: [
        'Heavy rainfall intensity in the catchment area',
        'High soil saturation reaching 78%',
        'Rising channel water level',
        'Steep terrain vulnerability',
        'Historical susceptibility to flash floods'
      ],
      recommendedAction: [
        'Prepare for possible evacuation.',
        'Monitor official local instructions.',
        'Keep emergency supplies ready.',
        'Avoid low-lying channels and unstable slopes.'
      ]
    },
    metrics: {
      rainfall: { value: 82, unit: 'mm/hr', description: 'High intensity' },
      soilMoisture: { value: 78, unit: '%', description: 'Saturated' },
      waterLevel: { value: 2.4, unit: 'm', description: 'Rising', trend: 'rising' },
      slope: { value: 34, unit: '°', description: 'High terrain risk' },
      historicalVulnerability: 'High'
    },
    sensorHealth: { online: 4, total: 5 }
  },
  {
    id: 'a2',
    name: 'Ward 4, Riverside',
    district: 'South District',
    lat: 27.4,
    lng: 88.45,
    riskData: {
      score: 45,
      level: 'MODERATE',
      forecastWindow: 'Next 6-12 Hours',
      leadTime: '8 hours',
      trend: 'stable',
      explanation: [
        'Moderate continuous rainfall',
        'Soil moisture increasing but below critical limits',
        'Water level slightly elevated'
      ],
      recommendedAction: [
        'Stay alert and monitor weather updates.',
        'Ensure drainage paths are clear.'
      ]
    },
    metrics: {
      rainfall: { value: 15, unit: 'mm/hr', description: 'Moderate' },
      soilMoisture: { value: 55, unit: '%', description: 'Normal' },
      waterLevel: { value: 1.2, unit: 'm', description: 'Stable', trend: 'stable' },
      slope: { value: 15, unit: '°', description: 'Low risk' },
      historicalVulnerability: 'Moderate'
    },
    sensorHealth: { online: 3, total: 3 }
  }
];

export const mockSensors: Sensor[] = [
  {
    id: 's1',
    name: 'RG-XYZ-01',
    type: 'Rain Gauge',
    reading: '82 mm/hr',
    status: 'ONLINE',
    lastUpdate: '2 min ago',
    location: [27.51, 88.51]
  },
  {
    id: 's2',
    name: 'SM-XYZ-02',
    type: 'Soil Moisture Sensor',
    reading: '78%',
    status: 'ONLINE',
    lastUpdate: '5 min ago',
    location: [27.505, 88.52]
  },
  {
    id: 's3',
    name: 'WL-XYZ-03',
    type: 'Water Level Sensor',
    reading: '2.4 m',
    status: 'DELAYED',
    lastUpdate: '15 min ago',
    location: [27.49, 88.49]
  },
  {
    id: 's4',
    name: 'SL-XYZ-04',
    type: 'Slope/Displacement Sensor',
    reading: '0.01 mm/hr',
    status: 'OFFLINE',
    lastUpdate: '3 hours ago',
    location: [27.52, 88.48]
  }
];

export const mockAlerts: Alert[] = [
  {
    id: 'al1',
    severity: 'HIGH',
    location: 'Village XYZ',
    riskScore: 82,
    timestamp: '2026-09-20T17:15:00Z',
    forecastWindow: 'Next 2-4 Hours',
    reason: 'Rapidly rising water levels and intense rainfall',
    status: 'Active'
  },
  {
    id: 'al2',
    severity: 'MODERATE',
    location: 'Ward 4, Riverside',
    riskScore: 45,
    timestamp: '2026-09-20T16:00:00Z',
    forecastWindow: 'Next 6-12 Hours',
    reason: 'Continuous rainfall causing soil saturation',
    status: 'Active'
  }
];

export const mockHistoricalEvents: HistoricalEvent[] = [
  {
    id: 'h1',
    type: 'Flood',
    date: '2023-08-15',
    location: 'Village XYZ',
    lat: 27.502,
    lng: 88.505,
    description: 'Sudden flash flood due to cloudburst in upper catchment.',
    impactSummary: '12 houses damaged, bridge washed away.'
  },
  {
    id: 'h2',
    type: 'Landslide',
    date: '2024-07-22',
    location: 'Highway Point A',
    lat: 27.45,
    lng: 88.55,
    description: 'Major landslide blocking the main highway.',
    impactSummary: 'Road closed for 4 days.'
  }
];

export const mockTimeSeriesData: TimeSeriesData[] = [
  { time: '08:00', rainfall: 5, soilMoisture: 40, waterLevel: 0.8, riskScore: 20 },
  { time: '09:00', rainfall: 15, soilMoisture: 45, waterLevel: 0.9, riskScore: 25 },
  { time: '10:00', rainfall: 35, soilMoisture: 55, waterLevel: 1.2, riskScore: 40 },
  { time: '11:00', rainfall: 65, soilMoisture: 65, waterLevel: 1.8, riskScore: 65 },
  { time: '12:00', rainfall: 82, soilMoisture: 78, waterLevel: 2.4, riskScore: 82 }
];
