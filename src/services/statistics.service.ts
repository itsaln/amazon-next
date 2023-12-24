import instance from '@/api/api.interceptor'

import { IStatisticsItem } from '@/types/statistics.interface'

const STATISTICS = 'statistics'

export const StatisticsService = {
	async getMain() {
		return instance.get<IStatisticsItem[]>(`/${STATISTICS}/main`)
	}
}
