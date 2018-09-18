using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RightEnergyPlatform.Migrations
{
    public partial class UpdateTableAmountAndTimeOfEnergyFlows : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "FlowAmount",
                table: "AmountAndTimeOfEnergyFlows",
                nullable: false,
                oldClrType: typeof(double));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "FlowAmount",
                table: "AmountAndTimeOfEnergyFlows",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
