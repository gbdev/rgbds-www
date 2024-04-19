# gbz80(7) — CPU opcode reference

import generated from '!!raw-loader!./gbz80.7.html';

<div className="manual-text" dangerouslySetInnerHTML={{ __html: generated }} />

export const toc = [
{
	"value": "DESCRIPTION",
	"id": "DESCRIPTION",
	"level": 2,
},
{
	"value": "LEGEND",
	"id": "LEGEND",
	"level": 2,
},
{
	"value": "INSTRUCTION OVERVIEW",
	"id": "INSTRUCTION_OVERVIEW",
	"level": 2,
},
{
	"value": "Load Instructions",
	"id": "Load_Instructions",
	"level": 3,
},
{
	"value": "INSTRUCTION REFERENCE",
	"id": "INSTRUCTION_REFERENCE",
	"level": 2,
},
{
	"value": "LD A,A+C+r8",
	"id": "LD_A,A+C+r8",
	"level": 3,
},
{
	"value": "LD A,A+C+[HL]",
	"id": "LD_A,A+C+_HL_",
	"level": 3,
},
{
	"value": "LD A,A+C+n8",
	"id": "LD_A,A+C+n8",
	"level": 3,
},
{
	"value": "LD A,A+r8",
	"id": "LD_A,A+r8",
	"level": 3,
},
{
	"value": "LD A,A+[HL]",
	"id": "LD_A,A+_HL_",
	"level": 3,
},
{
	"value": "LD A,A+n8",
	"id": "LD_A,A+n8",
	"level": 3,
},
{
	"value": "LD HL,HL+r16",
	"id": "LD_HL,HL+r16",
	"level": 3,
},
{
	"value": "LD HL,HL+SP",
	"id": "LD_HL,HL+SP",
	"level": 3,
},
{
	"value": "LD SP,SP+e8",
	"id": "LD_SP,SP+e8",
	"level": 3,
},
{
	"value": "LD A,A&r8",
	"id": "LD_A,A&r8",
	"level": 3,
},
{
	"value": "LD A,A&[HL]",
	"id": "LD_A,A&_HL_",
	"level": 3,
},
{
	"value": "LD A,A&n8",
	"id": "LD_A,A&n8",
	"level": 3,
},
{
	"value": "LD F.7,r8.u3",
	"id": "LD_F.7,r8.u3",
	"level": 3,
},
{
	"value": "LD F.7,[HL].u3",
	"id": "LD_F.7,_HL_.u3",
	"level": 3,
},
{
	"value": "LD [--SP],PC,n16",
	"id": "LD__--SP_,PC,n16",
	"level": 3,
},
{
	"value": "LD cc [--SP],PC,n16",
	"id": "LD_cc__--SP_,PC,n16",
	"level": 3,
},
{
	"value": "LD F.4,!F.4",
	"id": "LD_F.4,!F.4",
	"level": 3,
},
{
	"value": "LD F.7,A-r8",
	"id": "LD_F.7,A-r8",
	"level": 3,
},
{
	"value": "LD F.7,A-[HL]",
	"id": "LD_F.7,A-_HL_",
	"level": 3,
},
{
	"value": "LD F.7,A-n8",
	"id": "LD_F.7,A-n8",
	"level": 3,
},
{
	"value": "LD A,~A",
	"id": "LD_A,_A",
	"level": 3,
},
{
	"value": "LD A,A?",
	"id": "LD_A,A?",
	"level": 3,
},
{
	"value": "LD r8-",
	"id": "LD_r8-",
	"level": 3,
},
{
	"value": "LD [HL]-",
	"id": "LD__HL_-",
	"level": 3,
},
{
	"value": "LD r16-",
	"id": "LD_r16-",
	"level": 3,
},
{
	"value": "LD SP-",
	"id": "LD_SP-",
	"level": 3,
},
{
	"value": "LD IME,0",
	"id": "LD_IME,0",
	"level": 3,
},
{
	"value": "LD IME,1",
	"id": "LD_IME,1",
	"level": 3,
},
{
	"value": "LD [HL],[HL]",
	"id": "LD__HL_,_HL_",
	"level": 3,
},
{
	"value": "LD r8+",
	"id": "LD_r8+",
	"level": 3,
},
{
	"value": "LD [HL]+",
	"id": "LD__HL_+",
	"level": 3,
},
{
	"value": "LD r16+",
	"id": "LD_r16+",
	"level": 3,
},
{
	"value": "LD SP+",
	"id": "LD_SP+",
	"level": 3,
},
{
	"value": "LD PC,n16",
	"id": "LD_PC,n16",
	"level": 3,
},
{
	"value": "LD cc PC,n16",
	"id": "LD_cc_PC,n16",
	"level": 3,
},
{
	"value": "LD PC,HL",
	"id": "LD_PC,HL",
	"level": 3,
},
{
	"value": "LD PC,B e8",
	"id": "LD_PC,B_e8",
	"level": 3,
},
{
	"value": "LD cc PC,B e8",
	"id": "LD_cc_PC,B_e8",
	"level": 3,
},
{
	"value": "LD r8,r8",
	"id": "LD_r8,r8",
	"level": 3,
},
{
	"value": "LD r8,n8",
	"id": "LD_r8,n8",
	"level": 3,
},
{
	"value": "LD r16,n16",
	"id": "LD_r16,n16",
	"level": 3,
},
{
	"value": "LD [HL],r8",
	"id": "LD__HL_,r8",
	"level": 3,
},
{
	"value": "LD [HL],n8",
	"id": "LD__HL_,n8",
	"level": 3,
},
{
	"value": "LD r8,[HL]",
	"id": "LD_r8,_HL_",
	"level": 3,
},
{
	"value": "LD [r16],A",
	"id": "LD__r16_,A",
	"level": 3,
},
{
	"value": "LD [n16],A",
	"id": "LD__n16_,A",
	"level": 3,
},
{
	"value": "LD [H n16],A",
	"id": "LD__H_n16_,A",
	"level": 3,
},
{
	"value": "LD [H C],A",
	"id": "LD__H_C_,A",
	"level": 3,
},
{
	"value": "LD A,[r16]",
	"id": "LD_A,_r16_",
	"level": 3,
},
{
	"value": "LD A,[n16]",
	"id": "LD_A,_n16_",
	"level": 3,
},
{
	"value": "LD A,[H n16]",
	"id": "LD_A,_H_n16_",
	"level": 3,
},
{
	"value": "LD A,[H C]",
	"id": "LD_A,_H_C_",
	"level": 3,
},
{
	"value": "LD [HLI],A",
	"id": "LD__HLI_,A",
	"level": 3,
},
{
	"value": "LD [HLD],A",
	"id": "LD__HLD_,A",
	"level": 3,
},
{
	"value": "LD A,[HLD]",
	"id": "LD_A,_HLD_",
	"level": 3,
},
{
	"value": "LD A,[HLI]",
	"id": "LD_A,_HLI_",
	"level": 3,
},
{
	"value": "LD SP,n16",
	"id": "LD_SP,n16",
	"level": 3,
},
{
	"value": "LD [n16],SP",
	"id": "LD__n16_,SP",
	"level": 3,
},
{
	"value": "LD HL,SP+e8",
	"id": "LD_HL,SP+e8",
	"level": 3,
},
{
	"value": "LD SP,HL",
	"id": "LD_SP,HL",
	"level": 3,
},
{
	"value": "LD PC,PC",
	"id": "LD_PC,PC",
	"level": 3,
},
{
	"value": "LD A,A|r8",
	"id": "LD_A,A_r8",
	"level": 3,
},
{
	"value": "LD A,A|[HL]",
	"id": "LD_A,A__HL_",
	"level": 3,
},
{
	"value": "LD A,A|n8",
	"id": "LD_A,A_n8",
	"level": 3,
},
{
	"value": "LD AF,[SP++]",
	"id": "LD_AF,_SP++_",
	"level": 3,
},
{
	"value": "LD r16,[SP++]",
	"id": "LD_r16,_SP++_",
	"level": 3,
},
{
	"value": "LD [--SP],AF",
	"id": "LD__--SP_,AF",
	"level": 3,
},
{
	"value": "LD [--SP],r16",
	"id": "LD__--SP_,r16",
	"level": 3,
},
{
	"value": "LD r8.u3,0",
	"id": "LD_r8.u3,0",
	"level": 3,
},
{
	"value": "LD [HL].u3,0",
	"id": "LD__HL_.u3,0",
	"level": 3,
},
{
	"value": "LD PC,[SP++]",
	"id": "LD_PC,_SP++_",
	"level": 3,
},
{
	"value": "LD cc PC,[SP++]",
	"id": "LD_cc_PC,_SP++_",
	"level": 3,
},
{
	"value": "LD PC,[SP++] / LD IME,1",
	"id": "LD_PC,_SP++__/_LD_IME,1",
	"level": 3,
},
{
	"value": "LD r8,'r8",
	"id": "LD_r8,'r8",
	"level": 3,
},
{
	"value": "LD [HL],'[HL]",
	"id": "LD__HL_,'_HL_",
	"level": 3,
},
{
	"value": "LD 'A",
	"id": "LD_'A",
	"level": 3,
},
{
	"value": "LD r8,''r8",
	"id": "LD_r8,''r8",
	"level": 3,
},
{
	"value": "LD [HL],''[HL]",
	"id": "LD__HL_,''_HL_",
	"level": 3,
},
{
	"value": "LD ''A",
	"id": "LD_''A",
	"level": 3,
},
{
	"value": "LD r8,r8'",
	"id": "LD_r8,r8'",
	"level": 3,
},
{
	"value": "LD [HL],[HL]'",
	"id": "LD__HL_,_HL_'",
	"level": 3,
},
{
	"value": "LD A'",
	"id": "LD_A'",
	"level": 3,
},
{
	"value": "LD r8,r8''",
	"id": "LD_r8,r8''",
	"level": 3,
},
{
	"value": "LD [HL],[HL]''",
	"id": "LD__HL_,_HL_''",
	"level": 3,
},
{
	"value": "LD A''",
	"id": "LD_A''",
	"level": 3,
},
{
	"value": "LD [--SP],PC,B vec",
	"id": "LD__--SP_,PC,B_vec",
	"level": 3,
},
{
	"value": "LD A,A-C-r8",
	"id": "LD_A,A-C-r8",
	"level": 3,
},
{
	"value": "LD A,A-C-[HL]",
	"id": "LD_A,A-C-_HL_",
	"level": 3,
},
{
	"value": "LD A,A-C-n8",
	"id": "LD_A,A-C-n8",
	"level": 3,
},
{
	"value": "LD F.4,1",
	"id": "LD_F.4,1",
	"level": 3,
},
{
	"value": "LD r8.u3,1",
	"id": "LD_r8.u3,1",
	"level": 3,
},
{
	"value": "LD [HL].u3,1",
	"id": "LD__HL_.u3,1",
	"level": 3,
},
{
	"value": "LD r8,<<r8",
	"id": "LD_r8,__r8",
	"level": 3,
},
{
	"value": "LD [HL],<<[HL]",
	"id": "LD__HL_,___HL_",
	"level": 3,
},
{
	"value": "LD r8,>>r8",
	"id": "LD_r8,__r8",
	"level": 3,
},
{
	"value": "LD [HL],>>[HL]",
	"id": "LD__HL_,___HL_",
	"level": 3,
},
{
	"value": "LD r8,>>>r8",
	"id": "LD_r8,___r8",
	"level": 3,
},
{
	"value": "LD [HL],>>>[HL]",
	"id": "LD__HL_,____HL_",
	"level": 3,
},
{
	"value": "LD,0",
	"id": "LD,0",
	"level": 3,
},
{
	"value": "LD A,A-r8",
	"id": "LD_A,A-r8",
	"level": 3,
},
{
	"value": "LD A,A-[HL]",
	"id": "LD_A,A-_HL_",
	"level": 3,
},
{
	"value": "LD A,A-n8",
	"id": "LD_A,A-n8",
	"level": 3,
},
{
	"value": "LD r8,''r8''",
	"id": "LD_r8,''r8''",
	"level": 3,
},
{
	"value": "LD [HL],''[HL]''",
	"id": "LD__HL_,''_HL_''",
	"level": 3,
},
{
	"value": "LD A,A^r8",
	"id": "LD_A,A_r8",
	"level": 3,
},
{
	"value": "LD A,A^[HL]",
	"id": "LD_A,A__HL_",
	"level": 3,
},
{
	"value": "LD A,A^n8",
	"id": "LD_A,A_n8",
	"level": 3,
},
{
	"value": "SEE ALSO",
	"id": "SEE_ALSO",
	"level": 2,
},
{
	"value": "HISTORY",
	"id": "HISTORY",
	"level": 2,
},
];
