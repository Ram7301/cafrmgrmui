import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';

const statusMap = {
  pending: { label: 'Pending', color: 'warning' },
  delivered: { label: 'Delivered', color: 'success' },
  refunded: { label: 'Refunded', color: 'error' },
} as const;

export interface Order {
  id: string;
  customer: { name: string };
  amount: number;
  status: 'pending' | 'delivered' | 'refunded';
  createdAt: Date;
}

export interface LatestOrdersProps {
  orders?: Order[];
  sx?: SxProps;
}

export function LatestOrders({ orders = [], sx }: LatestOrdersProps): React.JSX.Element {
  const data = [
    {
      id: 1,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939970',
      SH_PRODUCT_NAME: 'Veg Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 8649.81,
    },
    {
      id: 12,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939971',
      SH_PRODUCT_NAME: 'Mashroom Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 6483.75,
    },
    {
      id: 31,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939972',
      SH_PRODUCT_NAME: 'Paneer Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 2742.45,
    },
    {
      id: 14,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939972',
      SH_PRODUCT_NAME: 'Panner Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 9591.75,
    },
    {
      id: 134,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939973',
      SH_PRODUCT_NAME: 'Veg Cheese Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 14896.35,
    },
    {
      id: 34,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939974',
      SH_PRODUCT_NAME: 'Egg Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 17603.8,
    },
    {
      id: 1342,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939975',
      SH_PRODUCT_NAME: 'Egg Cheese Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 9021.05,
    },
    {
      id: 2342,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939976',
      SH_PRODUCT_NAME: 'Chicken Pasta-250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 28370.3,
    },
    {
      id: 23423,
      SH_CATEGORY_ID: '102',
      SH_CATEGORY: 'Pasta',
      SH_PRODUCT_ID: '939977',
      SH_PRODUCT_NAME: 'Mix Veg Pasta -250 G',
      'SUM(SH_PAID_BY_EMPLOYEE)': 10070.1,
    },
  ];
  return (
    <Card sx={sx}>
      <CardHeader title="Product Proformance" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Sales Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((order) => {
              // const { label, color } = statusMap[order.status] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow hover key={order.id}>
                  <TableCell>{order.SH_PRODUCT_NAME}</TableCell>
                  <TableCell>{order['SUM(SH_PAID_BY_EMPLOYEE)']}</TableCell>
                  {/* <TableCell>{dayjs(order.createdAt).format('MMM D, YYYY')}</TableCell> */}
                  {/* <TableCell>
                    <Chip color={color} label={label} size="small" />
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
