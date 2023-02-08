import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAgent } from '../models/Agent';
import { lastValueFrom } from 'rxjs';

interface IAgentsResponse {
  status: number;
  data: IAgent[];
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private http: HttpClient) { }

  url: string = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';

  getAgents() {
    return this.http.get<IAgentsResponse>(this.url, { observe: 'response' });
  }

  async getAgentByName(name: string) {
    const agents = this.http.get<IAgentsResponse>(this.url, { observe: 'response' });
    const response = await lastValueFrom(agents);
    return response.body?.data.find(agent => agent.displayName.toLowerCase() === name.toLowerCase());
  }
}
