import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CoinFlipSimulator = () => {
  const [numFlips, setNumFlips] = useState(10);
  const [results, setResults] = useState({ heads: 0, tails: 0 });
  const [probability, setProbability] = useState(0);

  const simulateFlips = () => {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < numFlips; i++) {
      if (Math.random() < 0.5) {
        heads++;
      } else {
        tails++;
      }
    }
    setResults({ heads, tails });
    setProbability(heads / numFlips);
  };

  const chartData = [
    { name: 'Heads', value: results.heads },
    { name: 'Tails', value: results.tails },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Coin Flip Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="numFlips" className="block text-sm font-medium text-gray-700">
              Number of Flips:
            </label>
            <Input
              id="numFlips"
              type="number"
              min="1"
              value={numFlips}
              onChange={(e) => setNumFlips(Math.max(1, parseInt(e.target.value)))}
              className="mt-1"
            />
          </div>
          <Button onClick={simulateFlips} className="w-full">
            Simulate Flips
          </Button>
          <div className="text-center">
            <p className="text-lg font-semibold">
              Heads: {results.heads} | Tails: {results.tails}
            </p>
            <p className="text-lg font-semibold">
              Probability of Heads: {probability.toFixed(4)}
            </p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinFlipSimulator;
