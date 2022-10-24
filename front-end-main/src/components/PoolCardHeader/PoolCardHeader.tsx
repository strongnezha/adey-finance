import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import TokenSymbol from '../TokenSymbol';
import { Bank } from '../../grape-finance';
import AprModal from '../../views/Vineyard/AprModal';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import { PoolStats } from '../../grape-finance/types';
import { Button } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface PoolCardHeaderProps {
  bank: Bank;
  statsOnPool: PoolStats;
  stakedInToken?: number;
  showAPRCalc?: boolean;
}

const PoolCardHeader: React.FC<PoolCardHeaderProps> = ({ bank, statsOnPool, stakedInToken, showAPRCalc = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Grid container style={{ position: 'relative', paddingTop: '20px' }} spacing={1}>
      {/* <AprModal
        open={modalOpen}
        amountDeposited={100}
        handleClose={handleCloseModal}
        statsOnPool={statsOnPool}
        coin={bank.depositTokenName}
      />
      <Grid item xs={2} style={{ marginTop: 5 }}>
        <h5 style={{ padding: 0, margin: 0 }}>Stats</h5>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={1} justifyContent="flex-end">
          {showAPRCalc && (
            <Grid item>
              <Button
                className="action-button apr-calc"
                onClick={handleOpenModal}
                variant="outlined"
                startIcon={<SwapVerticalCircleIcon />}
              >
                Apr Calc
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid> */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item xs={4}>
            <span className="pool-card-info-text">APR:</span>
          </Grid>
          <Grid item xs={8}>
            <span className="pool-card-info-text">{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container justifyContent="space-between">
          <Grid item xs={4}>
            <span className="pool-card-info-text">TVL:</span>
          </Grid>
          <Grid item xs={8}>
            <b className={'pool-card-info-text'}>
              {' '}
              ${statsOnPool?.TVL ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US') : '-.--'}
            </b>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item xs={4}>
            <span className="pool-card-info-text1">Status:</span>
          </Grid>
          <Grid item xs={8}>
            <span className="pool-card-info-text1">Running</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item xs={4}>
            <span className="pool-card-info-text1">Deposit:</span>
          </Grid>
          <Grid item xs={8}>
            <span className="pool-card-info-text1">{bank.depositTokenName}</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item xs={4}>
            <span className="pool-card-info-text1">Earn:</span>
          </Grid>
          <Grid item xs={8}>
            <span className="pool-card-info-text1">AKSHARE</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PoolCardHeader;