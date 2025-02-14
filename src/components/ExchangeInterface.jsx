import React, { useState } from 'react';
// import { Card, CardHeader } from '@/components/ui/card';

const ExchangeInterface = () => {
  const [exchangeType, setExchangeType] = useState('CEX');
  
  const exchanges = {
    CEX: [
      {
        id: 1,
        name: 'BINANCE',
        logo: '⬡', // Using placeholder symbol - replace with actual logo
        date: '23.01.2025',
        active: true
      },
      {
        id: 2,
        name: 'Kraken',
        logo: '◐',
        date: '23.01.2025',
        active: true
      },
      {
        id: 3,
        name: 'Like & Love',
        logo: '👍',
        date: '23.01.2025',
        active: true
      },
      {
        id: 4,
        name: 'Bidget',
        logo: '↔',
        date: 'Coming soon...',
        active: false
      }
    ],
    DEX: [
      {
        id: 1,
        name: 'STON.fi',
        logo: '⬢',
        date: '23.01.2025',
        active: true
      },
      {
        id: 2,
        name: 'DeDust',
        logo: '◼',
        date: '23.01.2025',
        active: true
      },
      {
        id: 3,
        name: 'Like & Love',
        logo: '👍',
        date: '23.01.2025',
        active: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          <span className="text-white">Партнерские</span>{' '}
          <span className="text-blue-500">Крипто-Биржи</span>
        </h1>
        
        <p className="text-gray-300 text-center mb-8">
          Наши надежные партнеры обеспечивают беспрепятственный ввод и вывод ваших активов, 
          а также создают комфортные условия для вашего легкого и безопасного погружения в мир криптовалют.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setExchangeType('DEX')}
            className={`px-6 py-2 rounded-full ${
              exchangeType === 'DEX'
                ? 'bg-blue-500 text-white'
                : 'bg-transparent text-gray-400'
            }`}
          >
            DEX
          </button>
          <button
            onClick={() => setExchangeType('CEX')}
            className={`px-6 py-2 rounded-full ${
              exchangeType === 'CEX'
                ? 'bg-blue-500 text-white'
                : 'bg-transparent text-gray-400'
            }`}
          >
            CEX
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exchanges[exchangeType].map((exchange) => (
            <div
              key={exchange.id}
              className={`relative rounded-xl overflow-hidden ${
                exchange.active ? 'bg-navy-800' : 'bg-gray-800'
              }`}
            >
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{exchange.date}</div>
                <div className="text-lg font-bold text-white mb-4">
                  Выход на биржу {exchange.name}
                </div>
                <div className="flex justify-center mb-4">
                  <div className="text-4xl">{exchange.logo}</div>
                </div>
                <button
                  className={`w-full py-2 px-4 rounded-lg ${
                    exchange.active
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!exchange.active}
                >
                  ПЕРЕЙТИ
                </button>
              </div>
              <div className="absolute inset-0 border border-blue-500 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeInterface;