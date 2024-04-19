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
	"id": "LD_A,A+C+[HL]",
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
	"id": "LD_A,A+[HL]",
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
	"id": "LD_A,A&[HL]",
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
	"id": "LD_F.7,[HL].u3",
	"level": 3,
},
{
	"value": "LD [--SP],PC,n16",
	"id": "LD_[--SP],PC,n16",
	"level": 3,
},
{
	"value": "LD cc [--SP],PC,n16",
	"id": "LD_cc_[--SP],PC,n16",
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
	"id": "LD_F.7,A-[HL]",
	"level": 3,
},
{
	"value": "LD F.7,A-n8",
	"id": "LD_F.7,A-n8",
	"level": 3,
},
{
	"value": "LD A,~A",
	"id": "LD_A,~A",
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
	"id": "LD_[HL]-",
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
	"id": "LD_[HL],[HL]",
	"level": 3,
},
{
	"value": "LD r8+",
	"id": "LD_r8+",
	"level": 3,
},
{
	"value": "LD [HL]+",
	"id": "LD_[HL]+",
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
	"id": "LD_[HL],r8",
	"level": 3,
},
{
	"value": "LD [HL],n8",
	"id": "LD_[HL],n8",
	"level": 3,
},
{
	"value": "LD r8,[HL]",
	"id": "LD_r8,[HL]",
	"level": 3,
},
{
	"value": "LD [r16],A",
	"id": "LD_[r16],A",
	"level": 3,
},
{
	"value": "LD [n16],A",
	"id": "LD_[n16],A",
	"level": 3,
},
{
	"value": "LD [H n16],A",
	"id": "LD_[H_n16],A",
	"level": 3,
},
{
	"value": "LD [H C],A",
	"id": "LD_[H_C],A",
	"level": 3,
},
{
	"value": "LD A,[r16]",
	"id": "LD_A,[r16]",
	"level": 3,
},
{
	"value": "LD A,[n16]",
	"id": "LD_A,[n16]",
	"level": 3,
},
{
	"value": "LD A,[H n16]",
	"id": "LD_A,[H_n16]",
	"level": 3,
},
{
	"value": "LD A,[H C]",
	"id": "LD_A,[H_C]",
	"level": 3,
},
{
	"value": "LD [HLI],A",
	"id": "LD_[HLI],A",
	"level": 3,
},
{
	"value": "LD [HLD],A",
	"id": "LD_[HLD],A",
	"level": 3,
},
{
	"value": "LD A,[HLD]",
	"id": "LD_A,[HLD]",
	"level": 3,
},
{
	"value": "LD A,[HLI]",
	"id": "LD_A,[HLI]",
	"level": 3,
},
{
	"value": "LD SP,n16",
	"id": "LD_SP,n16",
	"level": 3,
},
{
	"value": "LD [n16],SP",
	"id": "LD_[n16],SP",
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
	"id": "LD_A,A|r8",
	"level": 3,
},
{
	"value": "LD A,A|[HL]",
	"id": "LD_A,A|[HL]",
	"level": 3,
},
{
	"value": "LD A,A|n8",
	"id": "LD_A,A|n8",
	"level": 3,
},
{
	"value": "LD AF,[SP++]",
	"id": "LD_AF,[SP++]",
	"level": 3,
},
{
	"value": "LD r16,[SP++]",
	"id": "LD_r16,[SP++]",
	"level": 3,
},
{
	"value": "LD [--SP],AF",
	"id": "LD_[--SP],AF",
	"level": 3,
},
{
	"value": "LD [--SP],r16",
	"id": "LD_[--SP],r16",
	"level": 3,
},
{
	"value": "LD r8.u3,0",
	"id": "LD_r8.u3,0",
	"level": 3,
},
{
	"value": "LD [HL].u3,0",
	"id": "LD_[HL].u3,0",
	"level": 3,
},
{
	"value": "LD PC,[SP++]",
	"id": "LD_PC,[SP++]",
	"level": 3,
},
{
	"value": "LD cc PC,[SP++]",
	"id": "LD_cc_PC,[SP++]",
	"level": 3,
},
{
	"value": "LD PC,[SP++] / LD IME,1",
	"id": "LD_PC,[SP++]_/_LD_IME,1",
	"level": 3,
},
{
	"value": "LD r8,'r8",
	"id": "LD_r8,'r8",
	"level": 3,
},
{
	"value": "LD [HL],'[HL]",
	"id": "LD_[HL],'[HL]",
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
	"id": "LD_[HL],''[HL]",
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
	"id": "LD_[HL],[HL]'",
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
	"id": "LD_[HL],[HL]''",
	"level": 3,
},
{
	"value": "LD A''",
	"id": "LD_A''",
	"level": 3,
},
{
	"value": "LD [--SP],PC,B vec",
	"id": "LD_[--SP],PC,B_vec",
	"level": 3,
},
{
	"value": "LD A,A-C-r8",
	"id": "LD_A,A-C-r8",
	"level": 3,
},
{
	"value": "LD A,A-C-[HL]",
	"id": "LD_A,A-C-[HL]",
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
	"id": "LD_[HL].u3,1",
	"level": 3,
},
{
	"value": "LD r8,<<r8",
	"id": "LD_r8,<<r8",
	"level": 3,
},
{
	"value": "LD [HL],<<[HL]",
	"id": "LD_[HL],<<[HL]",
	"level": 3,
},
{
	"value": "LD r8,>>r8",
	"id": "LD_r8,>>r8",
	"level": 3,
},
{
	"value": "LD [HL],>>[HL]",
	"id": "LD_[HL],>>[HL]",
	"level": 3,
},
{
	"value": "LD r8,>>>r8",
	"id": "LD_r8,>>>r8",
	"level": 3,
},
{
	"value": "LD [HL],>>>[HL]",
	"id": "LD_[HL],>>>[HL]",
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
	"id": "LD_A,A-[HL]",
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
	"id": "LD_[HL],''[HL]''",
	"level": 3,
},
{
	"value": "LD A,A^r8",
	"id": "LD_A,A^r8",
	"level": 3,
},
{
	"value": "LD A,A^[HL]",
	"id": "LD_A,A^[HL]",
	"level": 3,
},
{
	"value": "LD A,A^n8",
	"id": "LD_A,A^n8",
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
