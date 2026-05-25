// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  type: 'buyer' | 'agent' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Home Types
export interface Home {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  images: string[];
  description: string;
  latitude: number;
  longitude: number;
  listingAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

// Home Blueprint Types
export interface HomeBlueprint {
  userId: string;
  homePersonalityType: string;
  lifestyleArchetype: string;
  emotionalDrivers: string[];
  constraints: string[];
  tradeOffTolerances: TradeOff[];
  completedAt: Date;
}

export interface TradeOff {
  dimension1: string;
  dimension2: string;
  preference: 'dimension1' | 'dimension2' | 'neutral';
  importance: number; // 1-10
}

// Swipe/Behavior Types
export interface SwipeAction {
  userId: string;
  homeId: string;
  action: 'love' | 'list' | 'maybe';
  timestamp: Date;
  dwellTime?: number; // milliseconds spent viewing
}

export interface BehavioralProfile {
  userId: string;
  visualPreferences: Record<string, number>;
  spaceVsLocation: number; // -1 to 1 scale
  modernVsCharacter: number; // -1 to 1 scale
  decisionSpeed: 'fast' | 'slow' | 'moderate';
  loveItCount: number;
  listItCount: number;
  maybeCount: number;
  updatedAt: Date;
}

// Matching Types
export interface HomeMatch {
  homeId: string;
  userId: string;
  scores: {
    emotional: number; // 0-100
    lifestyle: number; // 0-100
    space: number; // 0-100
    location: number; // 0-100
    tradeOffFit: number; // 0-100
    overall: number; // 0-100
  };
  explanation: string;
  regretRiskFactors: string[];
  contradictions?: string[];
}

// Intent Types
export interface BuyerIntent {
  userId: string;
  homeId: string;
  intentScore: number; // 0-100
  factors: {
    swipeBehavior: number;
    blueprintAlignment: number;
    walkthroughEngagement: number;
    explicitFeedback: number;
  };
  likelihood: 'high' | 'moderate' | 'low';
  updatedAt: Date;
}

// Walkthrough Types
export interface Walkthrough {
  id: string;
  buyerId: string;
  homeId: string;
  agentId: string;
  scheduledAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
}

export interface WalkthroughEvent {
  id: string;
  walkthroughId: string;
  roomName: string;
  eventType: 'entered' | 'exited' | 'note' | 'reaction';
  duration?: number;
  reaction?: 'positive' | 'negative' | 'neutral';
  note?: string;
  timestamp: Date;
}

// Subscription Types
export enum SubscriptionTier {
  FREE = 'explorer',
  BLUEPRINT = 'home_blueprint',
  INTELLIGENCE = 'decision_intelligence',
  POWER_BUYER = 'power_buyer',
}

export interface Subscription {
  userId: string;
  tier: SubscriptionTier;
  status: 'active' | 'cancelled' | 'paused';
  startDate: Date;
  renewalDate: Date;
  price: number;
}

export enum AgentSubscriptionTier {
  STARTER = 'agent_starter',
  PRO = 'agent_pro',
  INTELLIGENCE = 'agent_intelligence',
}

export interface AgentSubscription {
  agentId: string;
  tier: AgentSubscriptionTier;
  status: 'active' | 'cancelled' | 'paused';
  startDate: Date;
  renewalDate: Date;
  price: number;
}
