
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface Alert {
  id: string;
  vehicleId: string;
  driver: string;
  status: 'warning' | 'critical' | 'normal';
  alertType: string;
  timestamp: Date;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    vehicleId: 'TRK-1042',
    driver: 'John Davis',
    status: 'warning',
    alertType: 'Eyes Closed (3s)',
    timestamp: new Date(Date.now() - 35000)
  },
  {
    id: '2',
    vehicleId: 'BUS-783',
    driver: 'Sarah Wilson',
    status: 'critical',
    alertType: 'Drowsiness Pattern',
    timestamp: new Date(Date.now() - 120000)
  },
  {
    id: '3',
    vehicleId: 'VAN-442',
    driver: 'Mike Johnson',
    status: 'normal',
    alertType: 'All Clear',
    timestamp: new Date(Date.now() - 240000)
  },
  {
    id: '4',
    vehicleId: 'TRK-3301',
    driver: 'Lisa Brown',
    status: 'warning',
    alertType: 'Distraction Detected',
    timestamp: new Date(Date.now() - 360000)
  },
  {
    id: '5',
    vehicleId: 'CAR-8832',
    driver: 'Robert Chen',
    status: 'normal',
    alertType: 'All Clear',
    timestamp: new Date(Date.now() - 480000)
  }
];

const AlertDashboard = () => {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newAlert: Alert = {
        id: `${Date.now()}`,
        vehicleId: `TRK-${Math.floor(1000 + Math.random() * 9000)}`,
        driver: ['Alex Smith', 'Emma Jones', 'David Lee', 'Maria Garcia'][Math.floor(Math.random() * 4)],
        status: ['warning', 'critical', 'normal'][Math.floor(Math.random() * 3)] as 'warning' | 'critical' | 'normal',
        alertType: ['Eyes Closed (2s)', 'Drowsiness Pattern', 'All Clear', 'Distraction Detected', 'Unauthorized User'][Math.floor(Math.random() * 5)],
        timestamp: new Date()
      };
      
      setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge className="bg-red-500">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-amber-500">Warning</Badge>;
      default:
        return <Badge className="bg-green-500">Normal</Badge>;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-gray-100">
        <h3 className="font-semibold text-gray-900">Fleet Monitoring Status</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={refreshData} 
          disabled={loading}
          className="flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Vehicle ID</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Driver</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Alert Type</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {alerts.map((alert) => (
              <tr 
                key={alert.id} 
                className={`${
                  alert.status === 'critical' 
                    ? 'bg-red-50' 
                    : alert.status === 'warning' 
                    ? 'bg-amber-50' 
                    : ''
                }`}
              >
                <td className="py-4 px-6 text-sm">{alert.vehicleId}</td>
                <td className="py-4 px-6 text-sm">{alert.driver}</td>
                <td className="py-4 px-6 text-sm">{getStatusBadge(alert.status)}</td>
                <td className="py-4 px-6 text-sm">{alert.alertType}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{alert.timestamp.toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-sm text-gray-500">
        Showing {alerts.length} most recent alerts • Updated {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default AlertDashboard;
